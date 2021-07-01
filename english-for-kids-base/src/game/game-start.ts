import { DISPLAY_NONE, EXTEND_IMG_BGI } from "../constants";

export const startGame = () => {
  document.addEventListener('click' , (event:MouseEvent)=> {
    if (!event) throw Error ('event(click on startBtn) error');
    const target = event.target as Element;
    if (target.classList.contains('button')) {
      hideStartGameBtn(target)
      showRepeatBtn();
      playAudio()
    }
  })
}
export const extendBgiOfCards = () => {
  const cards: NodeListOf<Element> = document.querySelectorAll('.card-img');
      for(let card of cards) {
        card.classList.add(EXTEND_IMG_BGI);

      }
}

export const hideBottomsOfCards = () => {
  const cardBottomArray: NodeListOf<Element> = document.querySelectorAll('.card-text-container');
      for(let elem of cardBottomArray) {
        elem.classList.add(DISPLAY_NONE);

      }
}
export const hideStartGameBtn = (target:Element) => {
  target.classList.add(DISPLAY_NONE);
}
export const showRepeatBtn = () => {
  const RepeatBtn: HTMLElement | null = document.getElementById('repeat');
  if(!RepeatBtn) throw Error ('RepeatBtn not found')
  RepeatBtn.classList.remove(DISPLAY_NONE)
}

export const playAudio = () => {

}
