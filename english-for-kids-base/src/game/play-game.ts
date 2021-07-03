import { AUDIO_URL } from "../constants";
import DATA_OF_CARDS from "../data";
import { createElement } from "../shared/add-element";
import { CURRENT_STATE } from "./current-state";
import { Audio } from "./game-start";

export const playGame =  (i = 0):void => {
  let word = '';
  const audioWord =  Audio(i)

  document.addEventListener('click', (event) => {
   if (!event) throw Error ('event(click on startBtn) error');
   const target = event.target as Element;

   if(target.classList.contains('extend-bgi')) {
    const image = <HTMLImageElement>target;
    const imageWord:string = image.src.split('/')[7];
    word = imageWord.split('.')[0];
    if(audioWord === word) {

      i +=1;
      playCorrectAudio()
      //addCorrect(i, word);
      playGame(i);
      if( i = 7) {
        return;
      }
    }
    if(audioWord !== word) {
      i = i;
      playErrorAudio();
      CURRENT_STATE.errors += 1;
    }
   }
 })
 }

//  export const addCorrect = (i:number, word:string) => {
//   CURRENT_STATE.correct += 1;
//   if( DATA_OF_CARDS[i]) {
//    let correctCard = DATA_OF_CARDS[i].find(card => card.word === word)?.correct;
//    if(correctCard) {
//      correctCard +=1; // не получается напрямую увеличить значение DATA_OF_CARDS[i].find(card => card.word === word)?.correct +=1
//    }
//   }
//  }

 export const playCorrectAudio = () => {
     const audio:HTMLAudioElement | null  = document.querySelector(`.correct-audio`);
     if(!audio) throw Error ('correct audio not found');
     audio.play();
   console.log(audio.src)

 }
 export const playErrorAudio = () => {
   const audio:HTMLAudioElement | null  = document.querySelector(`.error-audio`);
   if(!audio) throw Error ('correct audio not found');
   audio.play();
  console.log(audio.src)
}


