//your JS code here. If required.

const buttons = document.querySelectorAll(".btn");

// sound names (must match files inside /sounds folder)
const sounds = ["applause", "boo", "gasp", "tada", "victory"];

let currentAudio = null;

// Play sound
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const soundName = button.textContent;

        // Stop button logic
        if (button.classList.contains("stop")) {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            return;
        }

        // Stop previous sound
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play new sound
        const audio = new Audio(`sounds/${soundName}.mp3`);
        currentAudio = audio;
        audio.play();
    });
});