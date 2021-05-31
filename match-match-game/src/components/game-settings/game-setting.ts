//import { mainAria } from '../about-game/about-game';

export const difficulty:HTMLSelectElement = document.createElement('select');
difficulty.classList.add('difficulty');

export const difficultyHead:HTMLElement = document.createElement('p');
difficultyHead.innerHTML = '<b>difficulty</b>';

export const easy:HTMLOptionElement = document.createElement('option');
easy.innerHTML = 'easy(4*4)';
easy.value = 'easy';

export const hard:HTMLOptionElement = document.createElement('option');
hard.innerHTML = 'hard(6*6)';
hard.value = 'hard';

difficulty.appendChild(easy);
difficulty.appendChild(hard);

/// /
export const gameCards:HTMLSelectElement = document.createElement('select');
gameCards.classList.add('gameCards');
export const gameCardsHead = document.createElement('p');
gameCardsHead.innerHTML = '<b>Game cards</b>';

export const unsorted:HTMLOptionElement = document.createElement('option');
unsorted.innerHTML = 'unsorted';
unsorted.value = 'unsorted';

export const starWars:HTMLOptionElement = document.createElement('option');
starWars.innerHTML = 'starWars';
starWars.value = 'starWars';

gameCards.appendChild(unsorted);
gameCards.appendChild(starWars);

export function sittingAria(elem:HTMLElement) {
  elem.appendChild(difficultyHead);
  elem.appendChild(difficulty);

  elem.appendChild(gameCardsHead);
  elem.appendChild(gameCards);
}
