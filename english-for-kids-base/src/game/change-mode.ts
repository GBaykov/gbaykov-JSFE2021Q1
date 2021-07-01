import { DISPLAY_NONE } from "../constants";
import { extendBgiOfCards, hideBottomsOfCards, toggleStartGameBtn } from "./game-start";

export const changeMode = () => {
  document.addEventListener('click', (event:MouseEvent) => {
    if (!event) throw Error ('event error');
    const target = event.target as Element;
    const RepeatBtn: HTMLElement | null = document.getElementById('repeat');
  if(!RepeatBtn) throw Error ('RepeatBtn not found')
    if (target.classList.contains('mode')) {
      hideBottomsOfCards();
      extendBgiOfCards();
      toggleStartGameBtn();
      if(!RepeatBtn.classList.contains(DISPLAY_NONE)) {
        RepeatBtn.classList.add(DISPLAY_NONE)
      }
    }
  })

}
