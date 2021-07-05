export const CURRENT_STATE: CURENT = {
  category: 0,
  play: false,
  errors: 0,
  correct: 0,
  currentCard: 0,
  endGame: false,
  curentAudio: '',
};

export type CURENT = {
  category: number,
  play: boolean,
  errors: number,
  correct: number,
  currentCard:number,
  endGame: boolean,
  curentAudio:string
};
