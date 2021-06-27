

import { makeCardField } from './components/card/card-field';
import './styles.scss';

window.onload = () => {
  const bodyElement = document.getElementById('body');
  if (!bodyElement) throw Error('bodyElement not found');
  makeCardField(0)
}
