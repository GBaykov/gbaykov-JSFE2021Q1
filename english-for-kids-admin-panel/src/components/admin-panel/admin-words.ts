import { AUDIO_URL, IMG_URL } from "../../constants";
import { DATA_OF_CARDS } from "../../data";
import { createElement } from "../../shared/add-element";

export const makeAdminWordCard = (word:string, image:string, translation:string, audioSrc:string) => `
<div class="card " id="card-${word}">
  <div class="card__front">
  <audio class="image-audio" id="audio-${word}"src="${AUDIO_URL}/${audioSrc}"></audio>

    <div class="card-text-container" >
      <p class="card-name">${word}</p>
      <p class='flip-btn' id="flip-btn-${word}"> </p>
      <p class="music-icon" id="music-icon-${word}"> </p>
    </div>
    <div class="card-img-container" >
      <img class="card-img" src='${IMG_URL}/${image}' >
    </div>
  </div>

</div>
`;
export const makeAdminWords = (category:number):void => {
  const arr = DATA_OF_CARDS[category];
  let html = '';
  for (let i = 0; i < arr.length; i++) {
    html += `<div class ="card-container">${makeAdminWordCard(arr[i].word, arr[i].image, arr[i].translation, arr[i].audioSrc)} </div>`;
  }
  createElement('div', 'cards-field', html, 'main');
};

