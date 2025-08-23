const video = document.getElementById("bg-video");
const soundBtn = document.getElementById("sound-toggle");
soundBtn.addEventListener("click", () => {
    if(video.muted){
        video.muted = false;
        soundBtn.textContent ="🔊 PlAYING: SOUND OF EMILIA'S";
    } else {
        video.muted = true;
        soundBtn.textContent ="🔇PlAY: SOUND OF EMILIA'S";
    }
});