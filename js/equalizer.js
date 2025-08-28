document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("js-audio");
  const playBtn = document.getElementById("js-play-btn");
  const eq = document.getElementById("equalizer");

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio
        .play()
        .then(() => {
          eq.classList.add("equalizer-container");
          playBtn.textContent = "Stop";
        })
        .catch((err) => console.error("Erreur de lecture audio :", err));
    } else {
      audio.pause();
      eq.classList.remove("equalizer-container");
      playBtn.textContent = "Play";
    }
  });
  audio.addEventListener("ended", () => {
    eq.classList.remove("equalizer-container");
    playBtn.textContent = "Play";
  });
});