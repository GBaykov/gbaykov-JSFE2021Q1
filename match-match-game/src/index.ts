import './styles.scss';
import './components/register/pop-ap-form.scss';
import './components/Best-Score/best.score.scss'
import { App } from './app';
import { Header, HeaderCompil } from './components/header/header';
import { AboutAria, mainAria, originalMainAria } from './components/about-game/about-game';
import { registrBtn, startBtn, stopBtn } from './components/change-btns/change-btns';
import { aboutBtn, scoreBtn, settingBtn } from './components/nav-router/nav-router';
import { cancelBtn, email, formPopAp, submitBtn } from './components/register/pop-ap-form';
import { formValidation, ValidateEmail } from './components/register/register';
import { fakeBestScore, fakeScoreCompil } from './components/Best-Score/best-score';




window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');


  if(!appElement) throw Error('App root element not found');
  if(!bodyElement) throw Error('bodyElement not found');

  new HeaderCompil(bodyElement);
  //new AboutAria(appElement);
  appElement.innerHTML = '';
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
    mainAria.innerHTML = originalMainAria;
    appElement.innerHTML = '';
    appElement.appendChild(mainAria);
    scoreBtn.classList.remove('activ-rout');
  aboutBtn.classList.add('activ-rout');
  settingBtn.classList.remove('activ-rout');
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
    stopBtn.classList.add('displayNone');
    registrBtn.classList.remove('displayNone');
  })

  scoreBtn.addEventListener('click', function() {
    appElement.innerHTML = '';
    mainAria.innerHTML = fakeBestScore;
  scoreBtn.classList.add('activ-rout');
  aboutBtn.classList.remove('activ-rout');
  settingBtn.classList.remove('activ-rout');
    appElement.appendChild(mainAria);
  })


}
