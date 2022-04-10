function addClassPlaying(data){
    const key = document.querySelector(`div[data-key="${data}"]`);
    if(!key) return;
    key.classList.add('playing');
    playSound(data);
}
function removeClassPlaying(){
    const key = document.querySelector(`.playing`);
    if(!key) return;
    key.classList.remove('playing');
}
function playSound(data){
    const audio = document.querySelector(`audio[data-key="${data}"]`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
}
document.onkeydown = (e) => {
    addClassPlaying(e.keyCode);
}

document.onkeyup = (e) => {
    removeClassPlaying(e.keyCode);
}