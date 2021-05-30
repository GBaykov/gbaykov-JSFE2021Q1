import { mainAria } from "../about-game/about-game";

export const difficulty:HTMLSelectElement = document.createElement('select');
difficulty.classList.add('difficulty')

export const difficultyHead = document.createElement('p');
difficultyHead.innerHTML = `<b>difficulty</b>`;

export const easy = document.createElement('option');
easy.innerHTML = `easy(3*3)`;
easy.value = 'easy';

export const hard = document.createElement('option');
hard.innerHTML = `hard(5*5)`;
hard.value = 'hard';

difficulty.appendChild(easy);
difficulty.appendChild(hard);

////
export const gameCards:HTMLSelectElement = document.createElement('select');
gameCards.classList.add('gameCards')
export const gameCardsHead = document.createElement('p');
gameCardsHead.innerHTML = `<b>Game cards</b>`;

export const unsorted = document.createElement('option');
unsorted.innerHTML = `unsorted`;
unsorted.value = 'unsorted';

export const starWars = document.createElement('option');
starWars.innerHTML = `starWars`;
starWars.value = 'starWars';

gameCards.appendChild(unsorted);
gameCards.appendChild(starWars);




export function sittingAria(elem:HTMLElement) {
  elem.appendChild(difficultyHead);
  elem.appendChild(difficulty);

  elem.appendChild(gameCardsHead);
  elem.appendChild(gameCards);

}
