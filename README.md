# 🎀 Hui Xin Surprise Website

A beautiful, emotional, premium-quality responsive bilingual website — a digital love letter for Hui Xin.

## 📁 Project Structure

```
hui-xin-surprise/
├── index.html              — Main page (5 bilingual sections)
── css/
│   ├── style.css           — Main styles & design system
│   ├── animations.css      — All keyframe animations
│   └── responsive.css      — Responsive breakpoints (360px → 1440px+)
├── js/
│   ├── script.js           — Main script (loading, nav, particles, typewriter letter)
│   ├── gallery.js          — Photo gallery with bilingual messages
│   └── music.js            — Auto-play background music controls
├── music/
│   ├── README.md           — Instructions for adding music
│   └── background-music.mp3  ← PUT YOUR MUSIC HERE
├── images/
│   ├── photos/             — 42 photos for the gallery
│   └── decorations/        — Hello Kitty SVG
├── assets/                 — Additional assets
└── README.md               — This file
```

## 🎵 How to Add Background Music

1. Download a soft piano or cute instrumental MP3
2. Rename it to `background-music.mp3`
3. Place it in the `music/` folder

The music will **auto-play** on page load (and retry on first user interaction if blocked by the browser).

### Free music sources:
- [Pixabay Music](https://pixabay.com/music/) — search "soft piano" or "cute instrumental"
- [Free Music Archive](https://freemusicarchive.org/)
- [Incompetech](https://incompetech.com/)

## ✨ Features

### Content
- ✅ **Bilingual throughout** — Every section has both English and Chinese (中文)
- ✅ **42 personalized photo messages** — each with English + Chinese translation
- ✅ **Smooth typewriter letter animation** — character-by-character with natural pauses
- ✅ **8 flip cards** with bilingual messages
- ✅ **8 timeline items** with bilingual text
- ✅ **Hello Kitty aesthetic** with soft pink & pastels

### Technical
- ✅ **Auto-play music** with 4 fallback strategies (load, scroll, click, touch)
- ✅ **Animated music bars** controller with expandable volume panel
- ✅ **Floating cherry blossom petals, hearts, sparkles** (Canvas)
- ✅ **Custom cursor glow** (desktop only)
- ✅ **Scroll progress bar**
- ✅ **Modal with swipe support** for mobile
- ✅ **Fully responsive** (360px → 1440px+)
- ✅ **Glassmorphism cards**
- ✅ **GSAP + AOS animations**
- ✅ **Parallax effects** on hero
- ✅ **Mobile hamburger menu**
- ✅ **Back to top button**
- ✅ **Reduced motion** accessibility support
- ✅ **Chinese fonts**: Noto Serif SC + Ma Shan Zheng (calligraphy)

## 🚀 How to Run

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Or simply open `index.html` in a browser.

## 🎨 Customization

### Colors
All colors are CSS variables in `css/style.css`:
```css
:root {
    --pink-500: #ff6690;
    --pink-400: #ff7aa8;
    /* ... */
}
```

### Chinese Fonts
Loaded from Google Fonts:
- **Noto Serif SC** — for body Chinese text (serif, elegant)
- **Ma Shan Zheng** — for display Chinese text (calligraphy style)

### Messages
- **Gallery:** `js/gallery.js` → `galleryPhotos` array (`message` + `messageCn`)
- **Amazing cards:** `js/script.js` → `initAmazingCards()` → `cardsData`
- **Timeline:** `js/script.js` → `initTimeline()` → `items`
- **Letter:** `js/script.js` → `initLetterTypewriter()` → `letterContent`

---

Made with ❤️ for Hui Xin 用 ❤️ 为 Hui Xin 制作
