const piano = document.querySelector('.piano');
let pianoКeys = document.querySelectorAll('.piano-key');
const btnA = document.querySelector('.btn-container');

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
    
  }
  // код для определения зажатой кнопки мыши. Начало//
  let isMouseDown = false;
document.body.onmousedown = function() { 
  isMouseDown = true;
}
document.body.onmouseup = function() {
  isMouseDown = false;
}
 //код для определения зажатой кнопки мыши. Конец//

 piano.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
        pianoКeys.forEach((el) => {
          if(el.classList.contains('piano-key-active', 'piano-key-active-pseudo')) {
              el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
      }
    }); event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
    }   
  });
  


  //код на изменение актива у кнопок леттер\нотес.Начало.
let notes = document.querySelector('.btn-notes');
let letter = document.querySelector('.btn-letters');
  btnA.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn-active')&&event.target.classList.contains('btn-letters')) {
      event.target.classList.add('btn-active');
      notes.classList.remove('btn-active');
      pianoКeys.forEach(i => i.classList.add("piano-key-letter"));
    } 
    else if(!event.target.classList.contains('btn-active')&&event.target.classList.contains('btn-notes')) {
      event.target.classList.add('btn-active');
      letter.classList.remove('btn-active');
      pianoКeys.forEach(i => i.classList.remove("piano-key-letter"));
      }
  });//код на изменение актива у кнопок леттер\нотес.Конец.

piano.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('piano-key')) {
        
      const note = event.target.dataset.note;
        const src = 'assets/audio/${note}.mp3`;
        if (isMouseDown) {
          piano.addEventListener('mousedown',playAudio(src) );
          pianoКeys.forEach((el) => {
          if(el.classList.contains('piano-key-active', 'piano-key-active-pseudo')) {
              el.classList.remove('piano-key-active', 'piano-key-active-pseudo');
      }
    }); event.target.classList.add('piano-key-active', 'piano-key-active-pseudo');
}  
piano.removeEventListener('mouseup',playAudio );

    }   
  });
        
 
  
  function playSound(e) {
    const audio = document.querySelector(`audio[data-code="${event.code}"]`);
    const key = document.querySelector(`div[data-code="${event.code}"]`);
    key.classList.add('piano-key-active', 'piano-key-active-pseudo')
    if (event.repeat) return;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    
  }
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
  }
  
  pianoКeys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound )
  
  let toggleScreen = function () {
    if (document.fullscreenElement === null) {
      document.documentElement.requestFullscreen()
    } else if (document.fullscreenEnabled )  document.exitFullscreen();
  }
  document.querySelector('.fullscreen').addEventListener('click',toggleScreen);
