import { NoEmitOnErrorsPlugin } from "webpack";
import { DISPLAY_NONE, EXTEND_IMG_BGI } from "../constants";

export const startGame = () => {
  document.addEventListener('click' , (event:MouseEvent)=> {
    if (!event) throw Error ('event(click on startBtn) error');
    const target = event.target as Element;
    if (target.classList.contains('button')) {
      toggleStartGameBtn()
      showRepeatBtn();
      playAudio()
    }
  })
}
export const extendBgiOfCards = () => {
  const cards: NodeListOf<Element> = document.querySelectorAll('.card-img');
      for(let card of cards) {
        card.classList.toggle(EXTEND_IMG_BGI);

      }
}

export const hideBottomsOfCards = () => {
  const cardBottomArray: NodeListOf<Element> = document.querySelectorAll('.card-text-container');
      for(let elem of cardBottomArray) {
        elem.classList.toggle(DISPLAY_NONE);

      }
}
export const toggleStartGameBtn = () => {
  const startBtn:HTMLElement | null = document.querySelector('.button');
  if(!startBtn) throw Error ('startBtn not found');
  startBtn.classList.toggle(DISPLAY_NONE);
}
export const showRepeatBtn = () => {
  const RepeatBtn: HTMLElement | null = document.getElementById('repeat');
  if(!RepeatBtn) throw Error ('RepeatBtn not found')
  RepeatBtn.classList.remove(DISPLAY_NONE)
}

export const playAudio =  (i = 0) => {
 const arrOfAudio:any = document.querySelectorAll('audio')
// const sortedArr:[any] = arrOfAudio.sort();
let word = '';

 const audioWord =  Audio(i)
console.log(audioWord);

 document.addEventListener('click', (event) => {
  if (!event) throw Error ('event(click on startBtn) error');
  const target = event.target as Element;

  if(target.classList.contains('extend-bgi')) {
   const image = <HTMLImageElement>target;
   const imageWord = image.src.split('/')[7];
   word = imageWord.split('.')[0];
   console.log(word);
   if(audioWord === word) {
    i +=1;
    playAudio(i)
    if( i = 7) {
      return;
    }
  }
  }
})



}
export const Audio =  (i:number) => {
  const arrOfAudio:any = document.querySelectorAll('audio')
  const sortedArr:[any] = arrOfAudio;
  if(!sortedArr) throw Error ('arrOfAudio not found');
   sortedArr[i].play();
  const audio = sortedArr[i].src.split('/')[7];
    const audioWord = audio.split('.')[0];

    return audioWord;

  }


export const listenImageClick = ():string => {
  let word:string = '';
document.addEventListener('click', (event) => {

  if (!event) throw Error ('event(click on startBtn) error');
  const target = event.target as Element;
  if(target.classList.contains('extend-bgi')) {
   const image = <HTMLImageElement>target;
   const imageWord = image.src.split('/')[7];
   word = imageWord.split('.')[0]
  }
})
console.log(word)
return word;
}
