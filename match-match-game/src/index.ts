import './styles.scss';
import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');

  if(!appElement) throw Error('App root element not found');
  if(!bodyElement) throw Error('bodyElement not found');

  new App(appElement).start();
}






