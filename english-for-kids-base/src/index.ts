import './styles.scss';
import './components/register/pop-ap-form.scss';
import './components/Best-Score/best.score.scss';
import { App } from './app';
import { Header } from './components/header/header';
import { AboutAria, mainAria, originalMainAria } from './components/about-game/about-game';
import { registrBtn, startBtn, stopBtn } from './components/change-btns/change-btns';
import { aboutBtn, scoreBtn, settingBtn } from './components/nav-router/nav-router';
import {
  cancelBtn, email, FormPopAp, submitBtn,
} from './components/register/pop-ap-form';
import { formValidation, ValidateEmail } from './components/register/register';
import { fakeBestScore, fakeScoreCompil } from './components/Best-Score/best-score';
import { difficulty, gameCards, sittingAria } from './components/game-settings/game-setting';
import { HeaderCompil } from './components/header/header-compil';

window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');

  if (!appElement) throw Error('App root element not found');
  if (!bodyElement) throw Error('bodyElement not found');



  new HeaderCompil(bodyElement).compil();

  appElement.innerHTML = '';
  //appElement.appendChild(mainAria);

  startBtn.classList.remove('displayNone');
  new App(appElement).start();

  registrBtn.addEventListener('click', () => {
    new FormPopAp(appElement).open();
  });
  bodyElement.addEventListener('click', (event:MouseEvent) => {
    if(event.target === null) return;
    const target = event.target as HTMLElement;

     if (target.classList.contains('flip-btn-container')) {
      alert('flip-btn')
}

  })

  submitBtn.addEventListener('click', (event) => {
    if (!event) throw Error('App root element not found');
    event.preventDefault();
    if (formValidation() !== false) {
      appElement.innerHTML = '';
      appElement.appendChild(mainAria);
    }
  });

  cancelBtn.addEventListener('click', () => {

    appElement.innerHTML = '';
    appElement.appendChild(mainAria);
  });

  aboutBtn.addEventListener('click', () => {
    appElement.innerHTML = '';
    mainAria.innerHTML = originalMainAria;
    appElement.appendChild(mainAria);
    scoreBtn.classList.remove('activ-rout');
    aboutBtn.classList.add('activ-rout');
    settingBtn.classList.remove('activ-rout');
  });

  startBtn.addEventListener('click', () => {
    appElement.innerHTML = '';
    new App(appElement).start();
    startBtn.classList.add('displayNone');
    stopBtn.classList.remove('displayNone');

  });

  stopBtn.addEventListener('click', () => {
    appElement.innerHTML = '';
    appElement.appendChild(mainAria);
    stopBtn.classList.add('displayNone');
    registrBtn.classList.remove('displayNone');
  });

  scoreBtn.addEventListener('click', () => {
    appElement.innerHTML = '';
    mainAria.innerHTML = fakeBestScore;
    scoreBtn.classList.add('activ-rout');
    aboutBtn.classList.remove('activ-rout');
    settingBtn.classList.remove('activ-rout');
    appElement.appendChild(mainAria);
  });

  settingBtn.addEventListener('click', () => {
    appElement.innerHTML = '';
    mainAria.innerHTML = '';
    scoreBtn.classList.remove('activ-rout');
    aboutBtn.classList.remove('activ-rout');
    settingBtn.classList.add('activ-rout');
    sittingAria(mainAria);
    appElement.appendChild(mainAria);
  });

};
