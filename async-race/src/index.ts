import './styles.scss';
import './components/garage-page/garage.scss';
import './components/winners-page/winners.scss';


//import { App } from './app';
import { renderCarImage } from './components/garage-page/garage';
import { updateWinner } from './api';


window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');

  if (!appElement) throw Error('App root element not found');
  if (!bodyElement) throw Error('bodyElement not found');

  //render();
  // await updateStateGarage();
  // listen();
}
