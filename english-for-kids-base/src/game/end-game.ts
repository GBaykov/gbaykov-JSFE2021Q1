import { AUDIO_URL, IMG_URL } from "../constants";
import { createElement } from "../shared/add-element";
import { deleteElement } from "../shared/delete-element";


export const endGame = () => {
  deleteElement('start-game','body')
  deleteElement('footer', 'body')
  setTimeout(reloadWindow, 3000);
}

export const showEndGameMessage = () => {
  let res = 'success';
  const star:HTMLElement | null = document.querySelector('.star');
  if(star) {
    res = 'failure'
  }
const html = `
<div class="message">
  <audio class="image-audio" id="${res}-message" src="${AUDIO_URL}/${res}.mp3"></audio>
  <img class="card-img" src='${IMG_URL}/${res}.jpg' >
</div>
`;
createElement('div', 'end-game-message', html, 'main');
const audio  = document.getElementById(`${res}-message`) as HTMLAudioElement;
if(!audio ) throw Error(`${res}-message not found`);
audio.play();

}

export const reloadWindow = () => {
  window.location.reload()
}
