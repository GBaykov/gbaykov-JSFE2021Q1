import { DATA_OF_CARDS } from '../data';
import { addStar, playAudioOfAnswer } from './answer-reaction';
import { CURRENT_STATE } from './current-state';
import { endGame, showEndGameMessage } from './end-game';
import { Audio } from './game-start';

export let countOfError = 0;
export const addCorrect = (i:number, word:string) => {
  CURRENT_STATE.correct += 1;
  if (DATA_OF_CARDS[i]) {
    let correctCard = DATA_OF_CARDS[i].find((card) => card.word === word)?.correct;
    if (correctCard) {
      correctCard += 1; // не получается напрямую увеличить значение DATA_OF_CARDS[i].find(card => card.word === word)?.correct +=1
    }
  }
};

export const countBagError = (i:number) => {
  if (i > 0) {
    return countOfError += (i - 1);
  }
};
export const countError = (i:number) => {
  if (i > 1) {
    return CURRENT_STATE.errors = countOfError;
  }
};

export const playGame = (i = 0):void => {
  CURRENT_STATE.curentAudio = Audio(i);
  let word = '';
  document.addEventListener('click', (event) => {
    if (!event) throw Error('event(click on startBtn) error');
    const target = event.target as Element;

    if (target.classList.contains('extend-bgi')) {
      const image = <HTMLImageElement>target;
      const imageWord:string = image.src.split('/')[7];
      word = imageWord.split('.')[0];

      if (CURRENT_STATE.curentAudio === word) {
        if (i === 7) {
          showEndGameMessage();
          endGame();
          return;
        }

        i += 1;
        addStar('star-win');
        playAudioOfAnswer('correct');
        addCorrect(i, word);
        image.style.opacity = '0.4';
        countBagError(i);
        playGame(i);
      } else {
        CURRENT_STATE.errors += 1;
        countError(i);
        if (CURRENT_STATE.errors > countOfError) {
          playAudioOfAnswer('error');
          addStar('star');
        }
      }
    }
  });
};
