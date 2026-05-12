document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");
    const audioPlayer = document.getElementById("voicePlayer");

    // 1. Seamless Scroll-er jonno card clone kora
    const originalCards = track.innerHTML;
    track.innerHTML = originalCards + originalCards;

    const cards = document.querySelectorAll(".slide-card");

    // Audio play korar common function
    function playVoice(card) {
        const voiceSrc = card.getAttribute("data-voice");
        if (voiceSrc && audioPlayer.src !== window.location.origin + '/' + voiceSrc) {
            audioPlayer.src = voiceSrc;
            audioPlayer.currentTime = 0;
            audioPlayer.play().catch(err => {
                console.log("Audio play blocked by browser policy. Tap anywhere first.");
            });
        }
    }

    // Audio pause korar function
    function stopVoice() {
        audioPlayer.pause();
    }

    cards.forEach(card => {
        // --- DESKTOP EVENTS ---
        card.addEventListener("mouseenter", () => playVoice(card));
        card.addEventListener("mouseleave", stopVoice);

        // --- MOBILE/TOUCH EVENTS ---
        // Phone-e touch korle audio play hbe
        card.addEventListener("touchstart", (e) => {
            // Track automatic pause thakar jonno css hover dynamic triggered hbe phone-eo
            playVoice(card);
        }, { passive: true });
    });

    // Screen-er faka jaygay touch korle ba slide thake finger shorale audio bondho hbe
    document.addEventListener("touchstart", (e) => {
        if (!e.target.closest('.slide-card')) {
            stopVoice();
        }
    }, { passive: true });
});
