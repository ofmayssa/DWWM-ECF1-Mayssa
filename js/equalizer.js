document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("js-audio");
  const playBtn = document.getElementById("js-play-btn");
  const eq = document.getElementById("equalizer");

  // Listen for play/pause button clicks
  playBtn.addEventListener("click", () => { 
    if (audio.paused) {
      // Play the audio
      audio
        .play()
        .then(() => {
          eq.classList.add("equalizer-container"); // Show equalizer animation
          playBtn.textContent = "Stop";           // Update button text
        })
        .catch((err) => console.error("Audio playback error:", err));
    } else {
      // Pause the audio
      audio.pause();
      eq.classList.remove("equalizer-container"); // Hide equalizer animation
      playBtn.textContent = "Play";                // Update button text
    }
  });

  // When audio ends, reset button and equalizer
  audio.addEventListener("ended", () => {
    eq.classList.remove("equalizer-container");
    playBtn.textContent = "Play";
  });
});
