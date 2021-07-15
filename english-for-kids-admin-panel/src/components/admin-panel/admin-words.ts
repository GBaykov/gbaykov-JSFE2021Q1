import { AUDIO_URL, IMG_URL } from "../../constants";
import { DATA_OF_CARDS } from "../../data";
import { createElement } from "../../shared/add-element";

export const makeAdminWordCard = (word:string, image:string, translation:string,audioSrc:string) =>`
  <div class="card " id="card-${word}">
    <div class="card__front card-wrapper">
    <audio class="image-audio" id="audio-${word}"src="${AUDIO_URL}/${audioSrc}"></audio>
      <div class="card-text-container" >
        <p class="card-name"><b>Word</b>: ${word}</p>
        <p class='' id=""><b>Translation: </b>${translation} </p>
        <p class="" id=""><b>Sound file</b>: ${audioSrc}</p>
      </div>
      <div class="card-img-container" ><b>Image:</b>
        <img class="card-img admin-word-img" src='${IMG_URL}/${image}' >
        <button class="change-btn">Change</button>
        </div>



    </div>

  </div>
  `;


export const makeAdminWords = (category:number):void => {
  const arr = DATA_OF_CARDS[category];
  let html = '';
  for (let i = 0; i < arr.length; i++) {

    html += `<div class ="card-container">${makeAdminWordCard(arr[i].word, arr[i].image, arr[i].translation,arr[i].audioSrc)} </div>`;
  }
  createElement('div', 'cards-field', html, 'main');
};

