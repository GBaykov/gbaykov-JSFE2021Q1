import './styles.scss';
import './components/register/pop-ap-form.scss';
import { App } from './app';
import { Header, HeaderCompil } from './components/header/header';
import { AboutAria, mainAria } from './components/about-game/about-game';
import { registrBtn, startBtn, stopBtn } from './components/change-btns/change-btns';
import { aboutBtn } from './components/nav-router/nav-router';
import { cancelBtn, email, formPopAp, submitBtn } from './components/register/pop-ap-form';
import { formValidation, ValidateEmail } from './components/register/register';




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

  submitBtn.addEventListener('click', function() {
    if(!event) throw Error('App root element not found');
    event.preventDefault();
   if(formValidation() != false) {
 appElement.innerHTML = '';
    appElement.appendChild(mainAria);
   }


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
    startBtn.classList.add('displayNone');
    stopBtn.classList.remove('displayNone');
  })

  stopBtn.addEventListener('click', function() {
    appElement.innerHTML = '';
    appElement.appendChild(mainAria);
  })

}






