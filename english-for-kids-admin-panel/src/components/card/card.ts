import { AUDIO_URL, IMG_URL } from '../../constants';

export const makeCard = (word:string, image:string, translation:string, audioSrc:string) => `
<div class="card " id="card-${word}">
  <div class="card__front">
  <audio class="image-audio" id="audio-${word}"src="${AUDIO_URL}/${audioSrc}"></audio>
    <div class="card-img-container" >
      <img class="card-img" src='${IMG_URL}/${image}' >
    </div>
    <div class="card-text-container" >
      <p class="card-name">${word}</p>
      <p class='flip-btn' id="flip-btn-${word}"> </p>
      <p class="music-icon" id="music-icon-${word}"> </p>
    </div>
  </div>

  <div class="card__back back"  >
  <div class="card-img-container" >
      <img class="card-img" src='${IMG_URL}/${image}' >
    </div>
    <div class="card-text-container" >
    <p class="card-translation">${translation}</p>
    </div>

  </div>
</div>
`;
