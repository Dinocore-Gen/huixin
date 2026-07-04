/* ============================================
   HUI XIN SURPRISE — GALLERY v3
   Bilingual: English + Chinese
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
});

const galleryPhotos = [
    {
        src: 'images/photos/photo_01.jpg',
        message: 'That little finger-on-cheek pose... you make even the simplest selfie feel like a whole mood. ✨',
        messageCn: '那个小手托腮的姿势……连最简单的自拍都被你拍出了氛围感。✨',
        short: 'The cheek poke queen',
        shortCn: '戳脸女王'
    },
    {
        src: 'images/photos/photo_02.jpg',
        message: 'Pink dress, red ribbons, and that soft smile — you look like you stepped right out of a dream. 🌸',
        messageCn: '粉色裙子，红色丝带，还有那温柔的笑容——你就像从梦里走出来的一样。🌸',
        short: 'Dreamy in pink',
        shortCn: '粉色梦境'
    },
    {
        src: 'images/photos/photo_03.jpg',
        message: 'That wink is illegal. How are you this cute on a random day in striped pajamas? 😏',
        messageCn: '那个眨眼犯规了。怎么穿着条纹睡衣随便一天都能这么可爱？😏',
        short: 'Casual cute',
        shortCn: '随性可爱'
    },
    {
        src: 'images/photos/photo_04.jpg',
        message: 'The Hello Kitty clips, the cream dress, those big eyes — every detail about this photo screams "adorable." ',
        messageCn: 'Hello Kitty 发夹，奶白色裙子，那双大眼睛——这张照片的每个细节都在说"可爱"。',
        short: 'Hello Kitty vibes',
        shortCn: 'KT猫少女'
    },
    {
        src: 'images/photos/photo_05.jpg',
        message: 'That slightly-pouty look? Dangerous. You have no idea how much power that face holds. 💕',
        messageCn: '那个微微嘟嘴的表情？太危险了。你根本不知道自己那张脸有多大的杀伤力。💕',
        short: 'The pout',
        shortCn: '嘟嘴杀'
    },
    {
        src: 'images/photos/photo_06.jpg',
        message: 'The soft smile, the hair clip, the gentle light — this photo feels like a warm hug. 🤍',
        messageCn: '温柔的笑容，发夹，柔和的光线——这张照片感觉像一个温暖的拥抱。🤍',
        short: 'Warm and gentle',
        shortCn: '温柔如光'
    },
    {
        src: 'images/photos/photo_07.jpg',
        message: 'Standing there with your hands on your hips, surrounded by pink and plushies — this is your era. 👑',
        messageCn: '双手叉腰站在那里，被粉色和毛绒玩具包围——这就是你的时代。👑',
        short: 'Main character energy',
        shortCn: '主角光环'
    },
    {
        src: 'images/photos/photo_08.jpg',
        message: 'The school uniform, the green mountains behind you, that little flower in your hair — pure serotonin. 🌿',
        messageCn: '校服，身后的青山，头发上的小花——纯粹的治愈感。🌿',
        short: 'Campus sunshine',
        shortCn: '校园阳光'
    },
    {
        src: 'images/photos/photo_09.jpg',
        message: 'Holding your skirt like that with the biggest smile — you radiate joy in every single frame. 💃',
        messageCn: '那样提着裙子，带着最灿烂的笑容——你在每一帧里都散发着快乐。💃',
        short: 'Pure joy',
        shortCn: '纯真快乐'
    },
    {
        src: 'images/photos/photo_10.jpg',
        message: 'Both hands holding your hair, looking straight at the camera like you know exactly how stunning you are. ',
        messageCn: '双手捧着头发，直视镜头，仿佛你完全知道自己有多美。💫',
        short: 'Confident & cute',
        shortCn: '又飒又甜'
    },
    {
        src: 'images/photos/photo_11.jpg',
        message: 'Hands on hips, slight pout — the attitude in this photo is everything. You were born for this. 😤💕',
        messageCn: '双手叉腰，微微嘟嘴——这张照片的态度绝了。你天生就该这样。😤💕',
        short: 'That attitude though',
        shortCn: '气场全开'
    },
    {
        src: 'images/photos/photo_12.jpg',
        message: 'The way the light hits you on that walkway... nature itself wanted to make you look this good. 🌤️',
        messageCn: '光线打在天桥上照在你身上的样子……连大自然都想让你这么好看。️',
        short: 'Naturally glowing',
        shortCn: '自然发光'
    },
    {
        src: 'images/photos/photo_13.jpg',
        message: 'One leg up, holding hands, that soft smile — this photo feels like a scene from a movie. 🎬',
        messageCn: '一条腿翘起，牵着手，那温柔的笑容——这张照片像电影里的画面。🎬',
        short: 'Movie moment',
        shortCn: '电影感'
    },
    {
        src: 'images/photos/photo_14.jpg',
        message: 'Touching your hair with that tiny pout — you could sell ice to a polar bear with that face. 🧊',
        messageCn: '摸着头发，微微嘟嘴——你这张脸什么都能卖出去。',
        short: 'Effortlessly adorable',
        shortCn: '毫不费力的可爱'
    },
    {
        src: 'images/photos/photo_15.jpg',
        message: 'Hands clasped, soft eyes — there is something so peaceful about this photo. It makes my heart quiet. 🕊️',
        messageCn: '双手交握，眼神温柔——这张照片有一种让人平静的力量。它让我的心安静下来。🕊️',
        short: 'Peaceful beauty',
        shortCn: '安静的美'
    },
    {
        src: 'images/photos/photo_16.jpg',
        message: 'The cheek puff! The mountains! The uniform! This photo has no right to be this perfect. 🏔️',
        messageCn: '鼓起来的腮帮子！山景！校服！这张照片没理由这么完美。🏔️',
        short: 'Cheek puff perfection',
        shortCn: '鼓腮完美'
    },
    {
        src: 'images/photos/photo_17.jpg',
        message: 'That wink through the jacket sleeve — casual, effortless, and absolutely devastating. 💗',
        messageCn: '从外套袖子里探出的那个眨眼——随性、自然、 absolutely 致命。💗',
        short: 'Sleeve wink',
        shortCn: '袖口眨眼'
    },
    {
        src: 'images/photos/photo_18.jpg',
        message: 'Two expressions, same photo, zero chill. You go from sweet to serious in one frame. ',
        messageCn: '两种表情，同一张照片，完全不淡定。你一秒就能从甜美切换到认真。🎭',
        short: 'Mood switcher',
        shortCn: '表情切换'
    },
    {
        src: 'images/photos/photo_19.jpg',
        message: 'Those wide eyes staring right into my soul — I can never say no to you when you look like this. ',
        messageCn: '那双大眼睛直直望进我的灵魂——你这样看我的时候我永远说不了不。🥺',
        short: 'Soul stare',
        shortCn: '灵魂凝视'
    },
    {
        src: 'images/photos/photo_20.jpg',
        message: 'Mirror selfie with the cutest phone case and a peace sign — the energy is immaculate. ✌️',
        messageCn: '最可爱的手机壳配镜子自拍加剪刀手——这氛围感满分。✌️',
        short: 'Mirror vibes',
        shortCn: '镜子自拍'
    },
    {
        src: 'images/photos/photo_21.jpg',
        message: 'Up-close, no filter, just your beautiful eyes looking straight at me. This is the real you and it is breathtaking. 💗',
        messageCn: '近距离，无滤镜，只有你美丽的眼睛直直地看着我。这是真实的你，让人屏息。💗',
        short: 'Real and raw',
        shortCn: '真实而动人'
    },
    {
        src: 'images/photos/photo_22.jpg',
        message: 'Dorm mirror selfie — even in the most ordinary setting, you make everything feel special. ',
        messageCn: '宿舍镜子自拍——即使在最普通的环境里，你也能让一切都变得特别。',
        short: 'Dorm days',
        shortCn: '宿舍日常'
    },
    {
        src: 'images/photos/photo_23.jpg',
        message: 'Another mirror moment, another reminder that you are effortlessly photogenic from every angle. 📸',
        messageCn: '又一个镜子时刻，又一次提醒我你从哪个角度都上镜。',
        short: 'Every angle wins',
        shortCn: '全角度上镜'
    },
    {
        src: 'images/photos/photo_24.jpg',
        message: 'Looking up at me with those huge eyes — how am I supposed to function when you look at me like that? 🥺',
        messageCn: '用那双大眼睛抬头看我——你这样看我我怎么顶得住？',
        short: 'The upward gaze',
        shortCn: '仰视杀'
    },
    {
        src: 'images/photos/photo_25.jpg',
        message: 'Birthday queen with the tiara, Hello Kitty balloons, and that double peace sign — you deserve ALL the celebrations. 🎂👑',
        messageCn: '生日女王戴着皇冠，Hello Kitty 气球，双手剪刀手——你值得所有的庆祝。🎂👑',
        short: 'Birthday queen',
        shortCn: '生日女王'
    },
    {
        src: 'images/photos/photo_26.jpg',
        message: 'The white dress, the tiara, the balloons — this is what happiness looks like, and it has your face. 🎉',
        messageCn: '白裙子，皇冠，气球——这就是幸福的样子，而且它长着你的脸。',
        short: 'Happy birthday glow',
        shortCn: '生日光芒'
    },
    {
        src: 'images/photos/photo_27.jpg',
        message: 'Lying down, hair everywhere, that soft little smile — this photo feels like a secret just between us. 🤫',
        messageCn: '躺着，头发散开，那温柔的小笑容——这张照片感觉像只属于我们俩的秘密。🤫',
        short: 'Secret smile',
        shortCn: '秘密笑容'
    },
    {
        src: 'images/photos/photo_28.jpg',
        message: 'Upside-down peace sign mirror selfie — you are chaos and cuteness in the best possible way. 🙃',
        messageCn: '倒着的剪刀手镜子自拍——你是最可爱的混乱。🙃',
        short: 'Chaotic cute',
        shortCn: '乱中可爱'
    },
    {
        src: 'images/photos/photo_29.jpg',
        message: 'The same wide eyes, the same innocent face — some things never get old, and this is one of them. 👁️',
        messageCn: '同样的大眼睛，同样的无辜脸——有些事情永远不会过时，这就是其中之一。👁️',
        short: 'Never gets old',
        shortCn: '百看不厌'
    },
    {
        src: 'images/photos/photo_30.jpg',
        message: 'Dorm life but make it aesthetic. Even your everyday moments are worth framing. 🖼️',
        messageCn: '宿舍生活但充满了美感。你的日常瞬间都值得被裱起来。️',
        short: 'Everyday aesthetic',
        shortCn: '日常美学'
    },
    {
        src: 'images/photos/photo_31.jpg',
        message: 'Sideways mirror selfie — you could take a photo of a wall and somehow make it look good. 🧱✨',
        messageCn: '侧着的镜子自拍——你拍一面墙都能拍出好看的感觉。🧱✨',
        short: 'Makes everything look good',
        shortCn: '万物皆可美'
    },
    {
        src: 'images/photos/photo_32.jpg',
        message: 'Birthday vibes round two — the tiara suits you because you truly are royalty in my book. 👸',
        messageCn: '生日氛围第二弹——皇冠很适合你，因为在我心里你就是公主。👸',
        short: 'Royal treatment',
        shortCn: '公主待遇'
    },
    {
        src: 'images/photos/photo_33.jpg',
        message: 'Double peace signs at your birthday — two times the joy, two times the love, two times the Hui Xin magic. ✨✌️',
        messageCn: '生日双手剪刀手——双倍快乐，双倍爱，双倍的 Hui Xin 魔法。✨✌️',
        short: 'Double the magic',
        shortCn: '双倍魔法'
    },
    {
        src: 'images/photos/photo_34.jpg',
        message: 'Those eyes again. I swear, you could stop traffic with just a look. ',
        messageCn: '又是那双眼睛。我发誓，你看一眼就能让时间停下来。💗',
        short: 'Traffic-stopping eyes',
        shortCn: '一眼万年'
    },
    {
        src: 'images/photos/photo_35.jpg',
        message: 'Sitting so gracefully in that pink floral dress — you look like a porcelain doll that came to life. 🎎',
        messageCn: '穿着粉色碎花裙坐得那么优雅——你像活过来的瓷娃娃。🎎',
        short: 'Porcelain doll',
        shortCn: '瓷娃娃'
    },
    {
        src: 'images/photos/photo_36.jpg',
        message: 'Holding the red ribbon with anime posters behind you — this photo captures your whole personality in one frame. 🎀',
        messageCn: '拿着红色丝带，身后是动漫海报——这张照片一帧就装下了你整个个性。🎀',
        short: 'Whole personality in one photo',
        shortCn: '一帧装下全部'
    },
    {
        src: 'images/photos/photo_37.jpg',
        message: 'Standing in your floral dress with those cute socks — every detail is perfect because every detail is you. ',
        messageCn: '穿着碎花裙配着可爱的袜子——每个细节都完美，因为每个细节都是你。🌷',
        short: 'Perfect in every detail',
        shortCn: '处处完美'
    },
    {
        src: 'images/photos/photo_38.jpg',
        message: 'The wink is back! You really know how to keep things fun and playful. I love that about you. 😉',
        messageCn: '眨眼又回来了！你真的知道怎么让一切变得有趣俏皮。我就喜欢你这一点。😉',
        short: 'Playful wink returns',
        shortCn: '俏皮眨眼回归'
    },
    {
        src: 'images/photos/photo_39.jpg',
        message: 'The cheek poke makes a comeback — some poses are iconic and this is yours. You should trademark it. ️',
        messageCn: '戳脸姿势回归——有些姿势是标志性的，这就是你的。你应该注册商标。™️',
        short: 'Iconic cheek poke',
        shortCn: '标志戳脸'
    },
    {
        src: 'images/photos/photo_40.jpg',
        message: 'Biting the bread with a wink — only you could make eating a snack look like a photoshoot. 🍞',
        messageCn: '咬着面包还眨眼——只有你能把吃零食拍出大片的感。🍞',
        short: 'Snack photoshoot',
        shortCn: '零食大片'
    },
    {
        src: 'images/photos/photo_41.jpg',
        message: 'Holding the bread up to your face with those big eyes — the bread is lucky. I am jealous of a slice of toast. 😭',
        messageCn: '举着面包贴在脸上，那双大眼睛——面包好幸运。我吃一片吐司的醋。🍞😭',
        short: 'Jealous of toast',
        shortCn: '嫉妒吐司'
    },
    {
        src: 'images/photos/photo_42.jpg',
        message: 'The bread cheek pose — soft, silly, and absolutely unforgettable. This is peak Hui Xin and I love it. 🥖💕',
        messageCn: '面包贴脸姿势——柔软、可爱、绝对难忘。这就是巅峰 Hui Xin，我爱了。🥖💕',
        short: 'Peak Hui Xin',
        shortCn: '巅峰 Hui Xin'
    }
];

function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    grid.innerHTML = galleryPhotos.map((photo, i) => `
        <div class="gallery-item" data-index="${i}" data-aos="fade-up" data-aos-delay="${(i % 6) * 60}">
            <img src="${photo.src}" alt="Memory ${i + 1}" loading="lazy" decoding="async">
            <div class="gallery-item-overlay">
                <div class="gallery-item-number">✦ ${String(i + 1).padStart(2, '0')} ✦</div>
                <div class="gallery-item-title">${photo.short}</div>
                <div class="gallery-item-title-cn">${photo.shortCn}</div>
                <div class="gallery-item-hint">tap to read ♡</div>
            </div>
        </div>
    `).join('');

    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalMessage = document.getElementById('modalMessage');
    const modalMessageCn = document.getElementById('modalMessageCn');
    const modalCounter = document.getElementById('modalCounter');
    const modalPhotoLabel = document.getElementById('modalPhotoLabel');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        updateModal();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const msgArea = document.querySelector('.modal-message-area');
        if (msgArea) {
            msgArea.style.opacity = '0';
            msgArea.style.transform = 'translateY(10px)';
            setTimeout(() => {
                msgArea.style.transition = 'all 0.5s var(--ease-out)';
                msgArea.style.opacity = '1';
                msgArea.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateModal() {
        const photo = galleryPhotos[currentIndex];
        modalImage.src = photo.src;
        modalImage.alt = `Memory ${currentIndex + 1}`;
        modalMessage.innerHTML = `${photo.message} <span class="modal-message-heart">♥</span>`;
        modalMessageCn.textContent = photo.messageCn;
        modalCounter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(galleryPhotos.length).padStart(2, '0')}`;
        if (modalPhotoLabel) {
            modalPhotoLabel.textContent = `✦ Memory ${currentIndex + 1} ✦`;
        }
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % galleryPhotos.length;
        updateModal();
        flashMessage();
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
        updateModal();
        flashMessage();
    }

    function flashMessage() {
        const msgArea = document.querySelector('.modal-message-area');
        if (msgArea) {
            msgArea.style.transition = 'opacity 0.2s';
            msgArea.style.opacity = '0.3';
            setTimeout(() => {
                msgArea.style.transition = 'opacity 0.4s';
                msgArea.style.opacity = '1';
            }, 150);
        }
    }

    if (typeof window.refreshSmoothReveals === 'function') {
        window.refreshSmoothReveals();
    }

    grid.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            openModal(parseInt(item.dataset.index));
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    modalNext.addEventListener('click', (e) => { e.stopPropagation(); nextPhoto(); });
    modalPrev.addEventListener('click', (e) => { e.stopPropagation(); prevPhoto(); });

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextPhoto();
        if (e.key === 'ArrowLeft') prevPhoto();
    });

    let touchStartX = 0;
    const modalContent = modal.querySelector('.modal-content');
    modalContent.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    modalContent.addEventListener('touchend', (e) => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextPhoto();
            else prevPhoto();
        }
    }, { passive: true });
}
