  // фунукция для определения зажатой кнопки мыши. Начало//
  var isMouseDown = false;
document.body.onmousedown = function() { 
  isMouseDown = true;
}
document.body.onmouseup = function() {
  isMouseDown = false;
}
 //функция для определения зажатой кнопки мыши. Конец//


const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');


function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }
piano.addEventListener('click', (event) => {
    if(event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `/assets/audio/${note}.mp3`;
        playAudio(src);
        
    }   
  });
  
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }
  
  window.addEventListener('keydown', playSound)

  piano.addEventListener('click', (event) => {
  if(event.target.classList.contains('piano-key')) {
    pianoКeys.forEach((el) => {
      if(el.classList.contains('active')) {
        el.classList.remove('active');
      }
    });
    event.target.classList.add('active');
  }
});

  



