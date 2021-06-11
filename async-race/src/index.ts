import './styles.scss';
import './components/register/pop-ap-form.scss';
import './components/Best-Score/best.score.scss';
import { App } from './app';


window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');

  if (!appElement) throw Error('App root element not found');
  if (!bodyElement) throw Error('bodyElement not found');

};
