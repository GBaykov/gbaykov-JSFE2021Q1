import { makeCardField } from './components/card/card-field';
import './components/card/card.scss';
//import { menu } from './components/menu/menu';
import './styles.scss';
import './components/menu/menu.scss';
import { makeMenu } from './components/menu/menu';
import {  listenCards, listenMenu } from './listen';


window.onload = () => {
  const bodyElement:HTMLElement | null = document.getElementById('body');
  if (!bodyElement) throw Error('bodyElement not found');
  makeMenu();
  makeCardField(0)
  listenMenu();
  listenCards()
}
