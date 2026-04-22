const buttons = document.querySelectorAll(".btn");

// Create ONE audio element (important for Cypress)
const audio = document.createElement("audio");
document.body.appendChild(audio);

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const sound = button.textContent;

        // STOP button
        if (button.classList.contains("stop")) {
            audio.pause();
            audio.currentTime = 0;
            return;
        }

        // Set audio source and play
        audio.src = `sounds/${sound}.mp3`;
        audio.play();
    });
});