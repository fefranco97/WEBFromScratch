let video = document.getElementById("video1");
let controles = document.getElementById("controles");

const mostarIcones = () => {
  controles.style.display = "block";
};

const esconderIcones = () => {
  setTimeout(() => {
    controles.style.display = "none";
  }, 500);
};

const retroceder = () => {
  video.currentTime -= 10;
};

const avancar = () => {
  video.currentTime += 10;
};

const diminuir_vel = () => {
  video.playbackRate -= 0.1;
};

const aumentar_vel = () => {
  video.playbackRate += 0.1;
};

const play = () => {
  video.play();
};

const stop = () => {
  video.pause();
};
