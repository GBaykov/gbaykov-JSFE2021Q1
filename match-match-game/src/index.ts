import './styles.scss';
import './components/register/pop-ap-form.scss';
import { App } from './app';
import { Header, HeaderCompil } from './components/header/header';
import { AboutAria, mainAria } from './components/about-game/about-game';
import { registrBtn, startBtn } from './components/change-btns/change-btns';
import { aboutBtn } from './components/nav-router/nav-router';
import { cancelBtn, formPopAp } from './components/register/pop-ap-form';



window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');


  if(!appElement) throw Error('App root element not found');
  if(!bodyElement) throw Error('bodyElement not found');

  new HeaderCompil(bodyElement);
  //new AboutAria(appElement);
  appElement.appendChild(mainAria);

  //new App(appElement).start();

  registrBtn.addEventListener('click', function() {
    new formPopAp(appElement).open();
  })

  cancelBtn.addEventListener('click', function() {
    //new formPopAp(appElement).cancel();
    appElement.innerHTML = '';
    appElement.appendChild(mainAria);
  })

  aboutBtn.addEventListener('click', function() {
    appElement.innerHTML = '';
    appElement.appendChild(mainAria);
  })

  startBtn.addEventListener('click', function() {
    appElement.innerHTML = '';
    new App(appElement).start();
  })

}






