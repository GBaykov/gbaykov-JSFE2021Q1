import { makeFooter } from "../components/footer/footer";
import { makeMainField } from "../components/main-page/main-page";
import { AUDIO_URL, IMG_URL } from "../constants";
import { createElement } from "../shared/add-element";
import { deleteElement } from "../shared/delete-element";
import { playGame } from "./play-game";

export const endGame = () => {
  deleteElement('start-game','body')
  deleteElement('footer', 'body')
  //makeMainField();
  //makeFooter()
  setTimeout(reloadWindow, 3500);
}

export const showEndGameMessage = (result:string) => {
const html = `
<div class="message">
  <audio class="image-audio" id="${result}-message" src="${AUDIO_URL}/${result}.mp3"></audio>
  <img class="card-img" src='${IMG_URL}/${result}.jpg' >
</div>
`;
createElement('div', 'end-game-message', html, 'main');
const audio  = document.getElementById(`${result}-message`) as HTMLAudioElement;
if(!audio ) throw Error(`${result}-message not found`);
audio.play();

}

export const reloadWindow = () => {
  window.location.reload()
}
