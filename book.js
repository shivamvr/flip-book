

const bgm = document.getElementById('bgm')
const voiceAudio = document.getElementById('voice-audio')
const nextBtn = document.getElementById('next-btn')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const pageCount = document.querySelector('.page-count')
const prevBtn = document.getElementById('prev-btn')
const audioSources = ["audio/00.wav", "audio/01.wav", "audio/02.wav", "audio/03.wav", "audio/04.wav", "audio/05.wav"];
let currentAudioIndex = 0;

bgm.volume = 0.3;
bgm.play()
voiceAudio.play()

function handleControls() {

    if (!voiceAudio.paused) {
        console.log("Audio is playing.");
        play.classList.add('display-none')
        pause.classList.remove('display-none')
    } else {
        play.classList.remove('display-none')
        pause.classList.add('display-none')
        console.log("Audio is paused or stopped.");
    }
}

handleControls()

function changeNext() {
    if (pageCount.innerText == 9) {
        nextBtn.style.display = 'none'
    }

    currentAudioIndex = (currentAudioIndex + 1) % audioSources.length; // 0+1 % 2 
    voiceAudio.src = audioSources[currentAudioIndex];
    console.log('Source', audioSources[currentAudioIndex])
    voiceAudio.load(); // Reload the audio to apply the new source
    voiceAudio.play(); // Play the new audio
    handleControls()
}

function changePrev() {
    nextBtn.style.display = 'block'
    currentAudioIndex = (currentAudioIndex - 1 + audioSources.length) % audioSources.length;
    voiceAudio.src = audioSources[currentAudioIndex];
    console.log('Source', audioSources[currentAudioIndex])
    voiceAudio.load();
    voiceAudio.play();
    handleControls()
}

function playHandler() {
    voiceAudio.play()
    bgm.play()
    play.classList.add('display-none')
    pause.classList.remove('display-none')
}

function pauseHandler() {
    handleControls()
    bgm.pause()
    voiceAudio.pause()
    pause.classList.add('display-none')
    play.classList.remove('display-none')
}




nextBtn.addEventListener('click', changeNext)
prevBtn.addEventListener('click', changePrev)
play.addEventListener('click', playHandler)
pause.addEventListener('click', pauseHandler)
window.addEventListener('load', handleControls)

