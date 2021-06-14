import './styles.scss';
import './components/garage-page/garage.scss';
import './components/winners-page/winners.scss';

// import { App } from './app';
import {  render, renderCarImage } from './components/garage-page/garage';
// import { updateWinner } from './api';
import { updateStateGarage } from './components/garage-page/updateGarage';
import { listenProb } from './listen/listen';

render();
listenProb()
// await updateStateGarage();

//  window.onload = () => {

//

// const appElement = document.getElementById('app');
//    const bodyElement = document.getElementById('body');

// if (!appElement) throw Error('App root element not found');
//    if (!bodyElement) throw Error('bodyElement not found');
//

//  }
