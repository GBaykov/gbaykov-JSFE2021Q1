import { AUDIO_URL, IMG_URL } from "../constants";
import { createElement } from "../shared/add-element";
import { deleteElement } from "../shared/delete-element";

export const playAudioOfAnswer = (answer:string) => {
  const html = `
    <audio class="answer-audio" id="${answer}-audio-message" src="${AUDIO_URL}/${answer}.mp3"></audio>
  `;
  createElement('div', 'answer-reaction', html, 'body');
  const audio  = document.getElementById(`${answer}-audio-message`) as HTMLAudioElement;
  if(!audio ) throw Error(`${answer}-audio-message not found`);
  audio.play();
  }

  export let starsCount = 0;
  export let marginLeft = 10;
  export let starId = 0;

  export const addStar = (answer:string) => {
    starsCount += 1;
    marginLeft +=64;
    starId +=1;
    const html = `
      <img class="general-star ${answer}" id="${answer}-img-star-${starId}" src="${IMG_URL}/${answer}.svg"></audio>
    `;
    createElement('div', 'answer-stars', html, 'body');

    const star:HTMLElement | null  = document.getElementById(`${answer}-img-star-${starId}`);
    if(!star ) throw Error(`${answer}-img-star-${starId} not found`);
   // if(starsCount > 1)  deleteElement('answer-stars','body');
    star.style.marginLeft = `${marginLeft}px`
    }
//<p class="stars-count">${starsCount}</p>
