import { extendBgiOfCards, hideBottomsOfCards, hideStartGameBtn } from "./game-start";

export const changeMode = () => {
  document.addEventListener('click', (event:MouseEvent) => {
    if (!event) throw Error ('event error');
    const target = event.target as Element;
    if (target.classList.contains('mode')) {
      hideBottomsOfCards();
      extendBgiOfCards();

    }
  })

}
