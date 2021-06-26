
import { makeCardField } from './card';
import './styles.scss';

window.onload = () => {
  const appElement = document.getElementById('app');
  const bodyElement = document.getElementById('body');

  if (!appElement) throw Error('App root element not found');
  if (!bodyElement) throw Error('bodyElement not found');

  makeCardField(0)
}
