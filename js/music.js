/* ============================================
   HUI XIN SURPRISE — MUSIC v3
   TRUE AUTOPLAY with fallback strategies
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initMusic();
});

function initMusic() {
    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.getElementById('volumeIcon');
    const musicControls = document.getElementById('musicControls');

    if (!audio || !musicBtn) return;

    audio.volume = 0.5;

    let isPlaying = false;
    let autoplayAttempted = false;

    function updateVolumeIcon() {
        const vol = audio.volume;
        if (vol === 0) volumeIcon.className = 'fas fa-volume-mute volume-icon';
        else if (vol < 0.5) volumeIcon.className = 'fas fa-volume-down volume-icon';
        else volumeIcon.className = 'fas fa-volume-up volume-icon';
    }

    function tryPlay() {
        if (isPlaying) return;
        audio.play().then(() => {
            isPlaying = true;
            musicBtn.classList.add('playing');
            autoplayAttempted = true;
        }).catch(err => {
            console.log('Autoplay blocked:', err);
            // Browser blocked it — we'll show the button and wait for user
        });
    }

    // Strategy 1: Try immediately on load
    window.addEventListener('load', () => {
        setTimeout(tryPlay, 500);
    });

    // Strategy 2: Try on first user interaction
    const onUserInteraction = () => {
        if (!isPlaying) tryPlay();
        document.removeEventListener('click', onUserInteraction);
        document.removeEventListener('touchstart', onUserInteraction);
        document.removeEventListener('keydown', onUserInteraction);
    };
    document.addEventListener('click', onUserInteraction);
    document.addEventListener('touchstart', onUserInteraction, { passive: true });
    document.addEventListener('keydown', onUserInteraction);

    // Strategy 3: Try on scroll
    window.addEventListener('scroll', () => {
        if (!isPlaying && window.scrollY > 50) tryPlay();
    }, { passive: true });

    // Strategy 4: CTA button
    document.addEventListener('startMusic', () => {
        tryPlay();
    });

    // Manual toggle
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            musicBtn.classList.remove('playing');
        } else {
            tryPlay();
        }
    });

    // Volume
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
        updateVolumeIcon();
    });

    // Expand volume on hover/touch
    musicBtn.addEventListener('mouseenter', () => musicControls.classList.add('expanded'));
    musicBtn.addEventListener('mouseleave', () => {
        if (!musicBtn.matches(':focus')) musicControls.classList.remove('expanded');
    });
    musicBtn.addEventListener('touchstart', () => musicControls.classList.add('expanded'), { passive: true });

    // Loop fallback
    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    });

    // Visibility
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isPlaying) audio.pause();
        else if (!document.hidden && isPlaying) audio.play().catch(() => {});
    });

    updateVolumeIcon();
}
