import { CURRENT_STATE } from "./current-state";
import { Audio } from "./game-start";

export const playGame =  (i = 0):void => {
  //const arrOfAudio:any = document.querySelectorAll('audio')
 // const sortedArr:[any] = arrOfAudio.sort();
 let word = '';
  const audioWord =  Audio(i)
 //console.log(audioWord);

  document.addEventListener('click', (event) => {
   if (!event) throw Error ('event(click on startBtn) error');
   const target = event.target as Element;

   if(target.classList.contains('extend-bgi')) {
    const image = <HTMLImageElement>target;
    const imageWord:string = image.src.split('/')[7];
    word = imageWord.split('.')[0];
    if(audioWord === word) {
     i +=1;
     CURRENT_STATE.correct += 1;
     playGame(i);
     if( i = 7) {
       return;
     }
   } else {
     CURRENT_STATE.errors += 1;
   }
   }
 })
 }
