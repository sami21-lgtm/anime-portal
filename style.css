* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0b0b0b;
    color: #fff;
    font-family: 'Segoe UI', Roboto, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    transition: background 0.5s ease;
}

.slider-container {
    text-align: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
}

.hint-text {
    margin-top: 30px;
    color: #666;
    font-size: 0.95rem;
}

/* --- 3D Carousel Scene --- */
.slider-scene {
    width: 100%;
    height: 450px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 3D perspective to enable card depth */
    perspective: 1200px;
    margin-top: 30px;
}

/* The Carousel Ring */
.slider-carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    /* Enable 3D transform calculations dynamically in children */
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1); /* Smooth rotation */
}

/* Base style for Photo Cards */
.slide-card {
    width: 180px;
    height: 280px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    border: 2px solid #222;
    background: #111;
    z-index: 1;
    position: absolute; /* Stack all cards, JS positioned them * */
    transition: transform 0.8s ease, 
                border-color 0.4s, 
                box-shadow 0.4s, 
                opacity 0.4s;
    filter: brightness(0.6); /* Default darker brightness for non-centered cards */
}

.slide-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}

/* Card Interaction Effects (Hover before Tap) */
.slide-card:not(.active):hover {
    filter: brightness(1) scale(1.05);
    border-color: #00bcd4;
}

/* --- ACTIVE CARD CINEMATIC STYLE (After Tap & Rotate) --- */
.slide-card.active {
    transform-origin: center center; /* Zoom from center */
    scale: 1.25; /* Special zoom scale relative to its 3D position */
    z-index: 999; /* Stay on top * */
    filter: brightness(1.2);
    border-color: #ff0055; /* Glowing pink/red accent border */
    box-shadow: 0 20px 40px rgba(255, 0, 85, 0.5);
}

/* Blurring background state trigger via body */
body.card-focused .slide-card:not(.active) {
    opacity: 0.15; /* Other cards fade drastically * */
    filter: blur(2px) brightness(0.4);
}

body.card-focused .slider-scene::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(11,11,11,0.5), rgba(11,11,11,1) 70%);
    pointer-events: none;
    z-index: 990;
}
