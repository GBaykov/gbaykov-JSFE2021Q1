import { NoEmitOnErrorsPlugin } from "webpack";
import { DISPLAY_NONE, EXTEND_IMG_BGI } from "../constants";
import { CURRENT_STATE } from "./current-state";
import { playGame } from "./play-game";
import { sortArr } from "./sort-arr";

export const startGame = ():void => {
  document.addEventListener('click' , (event:MouseEvent)=> {
    if (!event) throw Error ('event(click on startBtn) error');
    const target = event.target as Element;
    if (target.classList.contains('button')) {
      toggleStartGameBtn()
      showRepeatBtn();
      playGame()
    }
  })
}
export const extendBgiOfCards = ():void => {
  const cards: NodeListOf<Element> = document.querySelectorAll('.card-img');
      for(let card of cards) {
        card.classList.toggle(EXTEND_IMG_BGI);
      }
}

export const hideBottomsOfCards = ():void => {
  const cardBottomArray: NodeListOf<Element> = document.querySelectorAll('.card-text-container');
      for(let elem of cardBottomArray) {
        elem.classList.toggle(DISPLAY_NONE);
      }
}

export const toggleStartGameBtn = ():void => {
  const startBtn:HTMLElement | null = document.querySelector('.button');
  if(!startBtn) throw Error ('startBtn not found');
  startBtn.classList.toggle(DISPLAY_NONE);
}
export const showRepeatBtn = ():void => {
  const RepeatBtn: HTMLElement | null = document.getElementById('repeat');
  if(!RepeatBtn) throw Error ('RepeatBtn not found')
  RepeatBtn.classList.remove(DISPLAY_NONE)
}



export const Audio =  (i:number):string => {
  const arrOfAudio:NodeListOf<HTMLAudioElement> = document.querySelectorAll('audio')
  const sortedArr = sortArr(arrOfAudio) ;
  if(!sortedArr) throw Error ('sortedArr not found');
    sortedArr[i].play();
    const audio:string = sortedArr[i].src.split('/')[7];
    const audioWord:string = audio.split('.')[0];
    return audioWord;
  }



export const listenImageClick = ():string => {
  let word:string = '';
document.addEventListener('click', (event) => {

  if (!event) throw Error ('event(click on startBtn) error');
  const target = event.target as Element;
  if(target.classList.contains('extend-bgi')) {
   const image = <HTMLImageElement>target;
   const imageWord:string = image.src.split('/')[7];
   word = imageWord.split('.')[0]
  }
})
return word;
}
