const video = document.getElementById("bg-video");
const soundBtn = document.getElementById("sound-toggle");
soundBtn.addEventListener("click", () => {
    if(video.muted){
        video.muted = false;
        soundBtn.textContent ="🔊 PLAYING: SOUND OF EMILIA'S";
    } else {
        video.muted = true;
        soundBtn.textContent ="🔇PLAY: SOUND OF EMILIA'S";
    }
});