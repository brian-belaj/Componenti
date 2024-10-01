//funzione per il video con play che segue il cursore
const videoContainer = document.getElementById("video-container");
const playButton = document.getElementById("play-button");
const videoIframe = document.getElementById('youtube-video');

// Funzione per ottenere le coordinate del video iframe
function getVideoContainerRect() {
  return videoContainer.getBoundingClientRect();
}

// Movimento del pulsante in base al mouse
videoContainer.addEventListener("mousemove", function (event) {
  const containerRect = getVideoContainerRect();
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;

  const buttonWidth = playButton.offsetWidth;
  const buttonHeight = playButton.offsetHeight;
  const buttonX = mouseX - buttonWidth / 2;
  const buttonY = mouseY - buttonHeight / 2;

  const maxButtonX = containerRect.width - buttonWidth;
  const maxButtonY = containerRect.height - buttonHeight;

  playButton.style.left = Math.min(Math.max(buttonX, 0), maxButtonX) + "px";
  playButton.style.top = Math.min(Math.max(buttonY, 0), maxButtonY) + "px";
});

// Quando il mouse lascia il container
videoContainer.addEventListener("mouseleave", function () {
  setTimeout(function () {
    playButton.style.left = "50%";
    playButton.style.top = "50%";
    playButton.style.transform = "translate(-50%, -50%) scale(1)";
  }, 50);
});

// Effetto hover sul pulsante
videoContainer.addEventListener("mouseover", function () {
  playButton.style.transform = "scale(1.2)";
});

// Gestione della visibilità del pulsante play/pause
videoContainer.addEventListener("mouseenter", function () {
  playButton.style.opacity = "1";
});

videoContainer.addEventListener("mouseleave", function () {
  if (!videoIframe.paused) {
    playButton.style.opacity = "0";
  }
});

// Avvia o pausa il video al clic
playButton.addEventListener("click", function () {
  const videoSrc = videoIframe.src;

  if (videoSrc.indexOf('autoplay=1') === -1) {
    videoIframe.src = videoSrc + "?autoplay=1";
    playButton.innerHTML =
      '<span class="pause-icon"><i class="fa fa-solid fa-pause"></i></span>';
    playButton.style.opacity = "0"; // Nasconde il pulsante dopo il click
  }
});