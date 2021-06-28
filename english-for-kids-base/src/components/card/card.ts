import { imgPatр } from '../../../public/img/waytest';
import { AUDIO } from '../../assets/audio/audiotest';
import { imgPatg } from '../../assets/img/waytest';
import DATA_OF_CARDS from '../../data';
const FLIP_CLASS = 'flipped';
const imgURL = 'https://raw.githubusercontent.com/GBaykov/English-for-kids-data/master/img/';
const audioURL = 'https://raw.githubusercontent.com/GBaykov/English-for-kids-data/master/audio/';

// AUDIO src\assets\audio\smile.mp3

export const makeCard = (word:string, image:string, translation:string, audioSrc:string) => `
<div class="card " id="card-${word}">
  <div class="card__front">
  <audio class="image-audio" id="audio-${word}"src="${audioURL}/${audioSrc}"></audio>
    <div class="card-img-container" >
      <img class="card-img" src='${imgURL}/${image}' >
    </div>
    <div class="card-text-container" >
      <p class="card-name">${word}</p>
      <p class='flip-btn' id="flip-btn-${word}"> </p>
      <p class="music-icon" id="music-icon-${word}"> </p>
    </div>
  </div>

  <div class="card__back back"  >
  <div class="card-img-container" >
      <img class="card-img" src='${imgURL}/${image}' >
    </div>
    <div class="card-text-container" >
    <p class="card-translation">${translation}</p>
    </div>

  </div>
</div>
`;

