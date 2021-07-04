import { makeFooter } from "../components/footer/footer";
import { makeMainField } from "../components/main-page/main-page";
import { AUDIO_URL, MIN_ERR } from "../constants";
import DATA_OF_CARDS from "../data";
import { createElement } from "../shared/add-element";
import { deleteElement } from "../shared/delete-element";
import { addStar, playAudioOfAnswer } from "./answer-reaction";
import { CURRENT_STATE } from "./current-state";
import { endGame, showEndGameMessage } from "./end-game";
import { Audio } from "./game-start";
let audioWord:string;

export const playGame =  (i=0):void => {
 CURRENT_STATE.curentAudio = Audio(i);
  let word = '';

   //audioWord =  Audio(i)

  document.addEventListener('click', (event) => {
   if (!event) throw Error ('event(click on startBtn) error');
   const target = event.target as Element;

   if(target.classList.contains('extend-bgi')) {
    const image = <HTMLImageElement>target;
    const imageWord:string = image.src.split('/')[7];
    word = imageWord.split('.')[0];

    if(CURRENT_STATE.curentAudio === word) {
      if( i === 7) {
        if(CURRENT_STATE.errors > MIN_ERR) {
          showEndGameMessage('failure')
        } else showEndGameMessage('success')
        endGame()
        return;
      };

      i +=1;
      console.log('correct:',word, CURRENT_STATE.curentAudio);
      addStar('star-win');
      playAudioOfAnswer('correct');
      addCorrect(i, word);
      image.style.opacity = '0.4';
      playGame(i);
      return;
    }
    else {
      //console.log('error:',word, CURRENT_STATE.curentAudio);
      CURRENT_STATE.errors += 1;
      console.log('CURRENT_STATE.errors:',CURRENT_STATE.errors);
return
    }
   }
 })
 }

 export const addCorrect = (i:number, word:string) => {
  CURRENT_STATE.correct += 1;
  if( DATA_OF_CARDS[i]) {
   let correctCard = DATA_OF_CARDS[i].find(card => card.word === word)?.correct;
   if(correctCard) {
     correctCard +=1; // не получается напрямую увеличить значение DATA_OF_CARDS[i].find(card => card.word === word)?.correct +=1
   }
  }
 }



