/* ============================================
   HUI XIN SURPRISE — MAIN SCRIPT v4
   Smooth typewriter letter animation
   Bilingual: English + Chinese
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
            disable: 'mobile'
        });
    }

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    initLoading();
    initCursorGlow();
    initNavigation();
    initScrollProgress();
    initBackToTop();
    initParticles();
    initAmazingCards();
    initTimeline();
    initLetterTypewriter();
    initCTAButton();
    initMobileGalleryTap();
});

/* ---------- LOADING ---------- */
function initLoading() {
    const screen = document.getElementById('loadingScreen');
    const bar = document.getElementById('loadingBar');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                screen.classList.add('hidden');
                document.body.style.overflow = '';
                animateHeroEntrance();
            }, 400);
        }
        bar.style.width = progress + '%';
    }, 200);

    document.body.style.overflow = 'hidden';
}

function animateHeroEntrance() {
    const content = document.querySelector('.hero-content');
    if (content && typeof gsap !== 'undefined') {
        gsap.fromTo(content,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );
    }
}

/* ---------- CURSOR GLOW ---------- */
function initCursorGlow() {
    const glow = document.getElementById('cursorGlow');
    if (!glow) return;
    if (window.matchMedia('(pointer: coarse)').matches) {
        glow.style.display = 'none';
        return;
    }

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animate);
    }
    animate();
}

/* ---------- NAVIGATION ---------- */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    });

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        menu.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            menu.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            toggle.classList.remove('open');
            menu.classList.remove('open');
        }
    });
}

/* ---------- SCROLL PROGRESS ---------- */
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (window.scrollY / h) * 100 + '%';
    });
}

/* ---------- BACK TO TOP ---------- */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 600);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ---------- PARTICLES ---------- */
function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const counts = {
        petal: isMobile ? 12 : 25,
        heart: isMobile ? 4 : 8,
        sparkle: isMobile ? 8 : 18
    };

    class Particle {
        constructor(type) {
            this.type = type;
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.size = Math.random() * 12 + 8;
            this.speedY = Math.random() * 1 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.02;
            this.opacity = Math.random() * 0.4 + 0.3;

            if (this.type === 'heart') {
                this.y = height + 20;
                this.speedY = -(Math.random() * 0.8 + 0.3);
                this.size = Math.random() * 15 + 10;
                this.color = `rgba(255, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 140 + 100)}, ${this.opacity})`;
            } else if (this.type === 'petal') {
                this.y = -20;
                this.color = `rgba(255, ${Math.floor(Math.random() * 50 + 180)}, ${Math.floor(Math.random() * 80 + 200)}, ${this.opacity})`;
            } else {
                this.y = Math.random() * height;
                this.size = Math.random() * 6 + 2;
                this.speedY = Math.random() * 0.3 + 0.1;
                this.twinkle = Math.random() * Math.PI * 2;
            }
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            if (this.type === 'petal') this.speedX = Math.sin(this.y * 0.01) * 0.5;
            if (this.type === 'sparkle') this.twinkle += 0.05;
            if (this.type === 'heart' && this.y < -20) this.reset();
            if (this.type !== 'heart' && this.y > height + 20) this.reset();
            if (this.x < -20 || this.x > width + 20) this.x = this.speedX > 0 ? -20 : width + 20;
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;

            if (this.type === 'petal') {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size / 2, this.size, 0, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.type === 'heart') {
                ctx.fillStyle = this.color;
                ctx.font = `${this.size}px serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('♥', 0, 0);
            } else {
                const op = (Math.sin(this.twinkle) + 1) / 2 * 0.6 + 0.2;
                ctx.fillStyle = `rgba(255, 255, 255, ${op})`;
                ctx.beginPath();
                for (let i = 0; i < 4; i++) {
                    const a = (i / 4) * Math.PI * 2;
                    ctx.moveTo(0, 0);
                    ctx.lineTo(Math.cos(a) * this.size, Math.sin(a) * this.size);
                }
                ctx.fill();
            }
            ctx.restore();
        }
    }

    for (let i = 0; i < counts.petal; i++) { const p = new Particle('petal'); p.y = Math.random() * height; particles.push(p); }
    for (let i = 0; i < counts.heart; i++) { const p = new Particle('heart'); p.y = Math.random() * height; particles.push(p); }
    for (let i = 0; i < counts.sparkle; i++) { const p = new Particle('sparkle'); p.x = Math.random() * width; particles.push(p); }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ---------- AMAZING CARDS (Bilingual) ---------- */
function initAmazingCards() {
    const grid = document.getElementById('amazingGrid');
    if (!grid) return;

    const cardsData = [
        { icon: '😊', title: 'Your Smile', titleCn: '你的笑容', message: 'Your smile could light up even the darkest day. It\'s impossible not to feel happier when you\'re smiling.', messageCn: '你的笑容能照亮最黑暗的日子。看到你笑，不可能不开心。' },
        { icon: '🤗', title: 'Your Kindness', titleCn: '你的善良', message: 'The way you care about others is rare. You give so much of yourself without expecting anything in return.', messageCn: '你关心别人的方式很稀有。你付出那么多，却从不求回报。' },
        { icon: '🤍', title: 'Your Heart', titleCn: '你的心', message: 'Your heart is pure gold. The way you love and care shows in everything you do.', messageCn: '你的心是纯金的。你的爱和关心体现在你做的每一件事里。' },
        { icon: '✨', title: 'Your Humor', titleCn: '你的幽默', message: 'You have this beautiful ability to make even the most ordinary moments feel fun and full of laughter.', messageCn: '你有一种美丽的能力，能让最平凡的时刻变得有趣、充满笑声。' },
        { icon: '🌸', title: 'Your Personality', titleCn: '你的个性', message: 'There is simply no one else like you. Your uniqueness is what makes you so incredibly special.', messageCn: '世界上没有第二个你。你的独特让你如此特别。' },
        { icon: '☀️', title: 'Positive Energy', titleCn: '正能量', message: 'Being around you feels like standing in sunshine. Your energy is contagious in the best way.', messageCn: '和你在一起就像站在阳光里。你的能量以最好的方式感染着周围。' },
        { icon: '🌟', title: 'Brightening Days', titleCn: '点亮日子', message: 'You have this magical way of turning bad days into good ones just by being you.', messageCn: '你有种魔法，只要做你自己就能把坏日子变成好日子。' },
        { icon: '🦋', title: 'Your Presence', titleCn: '你的存在', message: 'Just having you around makes the world feel softer, safer, and so much more beautiful.', messageCn: '只要有你在身边，世界就变得更柔软、更安全、更美丽。' }
    ];

    grid.innerHTML = cardsData.map((card, i) => `
        <div class="amazing-card" data-aos="fade-up" data-aos-delay="${i * 80}">
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-icon">${card.icon}</div>
                    <h3 class="card-front-title">${card.title}</h3>
                    <p class="card-front-title-cn">${card.titleCn}</p>
                    <p class="card-front-hint">tap to reveal ♡</p>
                </div>
                <div class="card-back">
                    <p class="card-back-text">${card.message}</p>
                    <p class="card-back-text-cn">${card.messageCn}</p>
                    <div class="card-back-deco"> ♥ ✦</div>
                </div>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('.amazing-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('flipped'));
    });
}

/* ---------- TIMELINE (Bilingual) ---------- */
function initTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    const items = [
        { text: 'You have one of the most beautiful smiles and eyes.', textCn: '你有着最美的笑容和眼睛。' },
        { text: 'You make ordinary days feel brighter.', textCn: '你让平凡的日子变得更明亮。' },
        { text: 'Your kindness never goes unnoticed.', textCn: '你的善良永远不会被忽视。' },
        { text: 'You have a way of making people feel comfortable.', textCn: '你有种让人安心的魔力。' },
        { text: 'My world is better because you\'re in it.', textCn: '因为有你，我的世界变得更好。' },
        { text: 'Your playful moments bring so much joy.', textCn: '你俏皮的瞬间带来那么多快乐。' },
        { text: 'You bring light into the darkness.', textCn: '你把光带进了黑暗。' },
        { text: 'Thank you for being such an amazing blessing.', textCn: '谢谢你成为这么美好的祝福。' }
    ];

    timeline.innerHTML = items.map((item, i) => `
        <div class="timeline-item" data-aos="${i % 2 === 0 ? 'fade-right' : 'fade-left'}" data-aos-delay="${i * 100}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-number">${String(i + 1).padStart(2, '0')}</div>
                <p class="timeline-text">${item.text}</p>
                <p class="timeline-text-cn">${item.textCn}</p>
            </div>
        </div>
    `).join('');
}

/* ---------- LETTER TYPEWRITER (Smooth) ---------- */
function initLetterTypewriter() {
    const letterBody = document.getElementById('letterBody');
    const letterHeader = document.querySelector('.letter-header');
    const letterSignature = document.querySelector('.letter-signature');

    if (!letterBody) return;

    // Each entry: [english, chinese, isHighlight]
    const letterContent = [
        ['Hui Xin,', 'Hui Xin，', true],
        ['', '', false],
        ['If there\'s one thing I hope you always remember...', '如果有一件事我希望你永远记得……', false],
        ['it\'s that you\'re appreciated.', '那就是——你值得被珍惜。', true],
        ['', '', false],
        ['Not because of what you do.', '不是因为你的所作所为。', false],
        ['Not because you have to be perfect.', '不是因为你必须完美。', false],
        ['But simply because you\'re you.', '而仅仅因为——你就是你。', true],
        ['', '', false],
        ['You have a way of making people smile without even realizing it.', '你有一种让人不自觉微笑的魔力。', false],
        ['', '', false],
        ['Your kindness, your laugh, your personality, and the little things you do leave a bigger impact than you probably know.', '你的善良、你的笑声、你的个性，还有你做的那些小事，留下的影响比你想象的要大得多。', false],
        ['', '', false],
        ['I\'m genuinely thankful that our paths crossed.', '我真心感谢我们的相遇。', false],
        ['', '', false],
        ['Meeting you has been one of those unexpected blessings that made my life brighter.', '遇见你，是那些让我的生活变得更明亮的意外祝福之一。', false],
        ['', '', false],
        ['So I made this little surprise.', '所以我准备了这个小惊喜。', false],
        ['', '', false],
        ['Not because today is special...', '不是因为今天有多特别……', false],
        ['', '', false],
        ['But because you are. ❤️', '而是因为你。❤️', true]
    ];

    let hasAnimated = false;
    let cursorEl = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                setTimeout(() => animateLetter(), 500);
            }
        });
    }, { threshold: 0.25 });

    observer.observe(letterBody);

    function animateLetter() {
        if (letterHeader) letterHeader.classList.add('visible');

        // Create line elements
        letterBody.innerHTML = '';
        letterContent.forEach(([en, cn], i) => {
            const line = document.createElement('span');
            line.className = 'typewriter-line';
            if (i === 0 || i === 3 || i === 7 || i === 21) line.classList.add('highlight');
            letterBody.appendChild(line);

            if (cn) {
                const cnLine = document.createElement('span');
                cnLine.className = 'typewriter-line cn-line';
                letterBody.appendChild(cnLine);
            }
        });

        // Create cursor
        cursorEl = document.createElement('span');
        cursorEl.className = 'typewriter-cursor';
        letterBody.appendChild(cursorEl);

        // Type each line
        let lineIndex = 0;
        let allLines = letterBody.querySelectorAll('.typewriter-line');

        function typeNextLine() {
            if (lineIndex >= letterContent.length) {
                // Remove cursor, show signature
                setTimeout(() => {
                    if (cursorEl) cursorEl.style.opacity = '0';
                    setTimeout(() => {
                        if (cursorEl) cursorEl.remove();
                        if (letterSignature) letterSignature.classList.add('visible');
                    }, 800);
                }, 600);
                return;
            }

            const [en, cn] = letterContent[lineIndex];
            const enLine = allLines[lineIndex * 2];
            const cnLine = allLines[lineIndex * 2 + 1];

            if (en) {
                enLine.classList.add('visible');
                typeText(enLine, en, () => {
                    // Move cursor to end of english line
                    if (cursorEl) enLine.appendChild(cursorEl);

                    if (cn && cnLine) {
                        setTimeout(() => {
                            cnLine.classList.add('visible');
                            typeText(cnLine, cn, () => {
                                if (cursorEl) cnLine.appendChild(cursorEl);
                                lineIndex++;
                                setTimeout(typeNextLine, 200);
                            });
                        }, 150);
                    } else {
                        lineIndex++;
                        setTimeout(typeNextLine, 200);
                    }
                });
            } else {
                // Empty line
                lineIndex++;
                setTimeout(typeNextLine, 100);
            }
        }

        typeNextLine();
    }

    function typeText(element, text, callback) {
        let charIndex = 0;
        const baseSpeed = 35; // ms per character

        function typeChar() {
            if (charIndex < text.length) {
                // Remove cursor temporarily
                if (cursorEl && cursorEl.parentNode) {
                    cursorEl.parentNode.removeChild(cursorEl);
                }

                // Add character
                element.textContent += text[charIndex];
                charIndex++;

                // Re-add cursor
                if (cursorEl) element.appendChild(cursorEl);

                // Variable speed
                const char = text[charIndex - 1];
                let delay = baseSpeed;

                if (char === '.' || char === '。') delay = 200;
                else if (char === ',' || char === '，') delay = 120;
                else if (char === '!' || char === '！') delay = 180;
                else if (char === '?' || char === '？') delay = 180;
                else if (char === '—' || char === '-') delay = 150;
                else if (char === ' ' || char === ' ') delay = 20;

                setTimeout(typeChar, delay);
            } else {
                if (callback) callback();
            }
        }

        typeChar();
    }
}

/* ---------- CTA ---------- */
function initCTAButton() {
    const btn = document.getElementById('ctaButton');
    if (!btn) return;
    btn.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('startMusic'));
        const special = document.getElementById('special');
        if (special) special.scrollIntoView({ behavior: 'smooth' });
    });
}

/* ---------- MOBILE GALLERY TAP ---------- */
function initMobileGalleryTap() {
    if (!window.matchMedia('(pointer: coarse)').matches) return;

    document.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (!item) {
            document.querySelectorAll('.gallery-item.show-overlay')
                .forEach(el => el.classList.remove('show-overlay'));
            return;
        }

        const wasShown = item.classList.contains('show-overlay');
        document.querySelectorAll('.gallery-item.show-overlay')
            .forEach(el => el.classList.remove('show-overlay'));

        if (!wasShown) {
            item.classList.add('show-overlay');
        }
    }, { passive: true });
}

/* ---------- GSAP PARALLAX ---------- */
window.addEventListener('load', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.to('.kitty-svg-1', {
        y: -100,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
    });
    gsap.to('.kitty-svg-2', {
        y: -150,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
    });
});
