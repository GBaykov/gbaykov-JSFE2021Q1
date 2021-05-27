import './styles.scss';
import { App } from './app';
import { Header, HeaderCompil } from './components/header/header';
import { AboutAria, mainAria } from './components/about-game/about-game';



window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');


  if(!appElement) throw Error('App root element not found');
  if(!bodyElement) throw Error('bodyElement not found');

  new HeaderCompil(bodyElement);
  //new AboutAria(appElement);
  appElement.appendChild(mainAria);

  //new App(appElement).start();


}






