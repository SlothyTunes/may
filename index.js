const audio = document.querySelector("audio");
const button = document.querySelector("#custom-button");
const volume_1 = document.querySelector(".unmute");
const volume_2 = document.querySelector(".mute");

function playAudio() {
  
  audio.play();
  audio.volume = 0.1;
}

button.addEventListener("click", function () {
  button.classList.toggle("active");
});

button.addEventListener("click", playAudio, { once: true });

volume_1.addEventListener("click", function(){
    audio.volume = 0;
    volume_1.style.display = "none";
    volume_2.style.display = "flex";
})

volume_2.addEventListener("click", function(){
    audio.volume = 0.1;
    volume_1.style.display = "flex";
    volume_2.style.display = "none";
})