document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");
    const audioPlayer = document.getElementById("voicePlayer");
    const body = document.body;

    // 1. Endless loop setup cloning
    const originalCards = track.innerHTML;
    track.innerHTML = originalCards + originalCards;

    // Re-select duplicated items from DOM
    const cards = document.querySelectorAll(".slide-card");

    cards.forEach(card => {
        // Desktop or Mobile touch dynamic pointer click listener
        card.addEventListener("click", (e) => {
            e.stopPropagation(); // Event bubble block core blank space trigger off korbe

            // Jodi agethkei ei card-ti active thake, tobe details close hye jabe
            if (card.classList.contains("active")) {
                resetSlider();
                return;
            }

            // Onno kono active card thakle age shetake clean korbe
            removeActiveStates();

            // Current card active zoom state injection
            card.classList.add("active");
            track.classList.add("paused"); // Animation stop
            body.classList.add("card-focused"); // Blur overlay activate

            // Voice Playback controller trigger
            const voiceSrc = card.getAttribute("data-voice");
            if (voiceSrc) {
                audioPlayer.src = voiceSrc;
                audioPlayer.currentTime = 0;
                audioPlayer.play().catch(err => console.log("Interactivity note: Play blocked by policy. Tap again."));
            }
        });
    });

    // Faka background-e touch/click korle normal slide fire ashbe
    document.addEventListener("click", (e) => {
        if (!e.target.closest('.slide-card')) {
            resetSlider();
        }
    });

    // Audio tracking audio player control stream (Voice sesh hole auto reset)
    audioPlayer.addEventListener("ended", () => {
        resetSlider();
    });

    function removeActiveStates() {
        cards.forEach(c => c.classList.remove("active"));
    }

    function resetSlider() {
        removeActiveStates();
        track.classList.remove("paused");
        body.classList.remove("card-focused");
        audioPlayer.pause();
    }
});
