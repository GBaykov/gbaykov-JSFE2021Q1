import './components/card/card.scss';
import './components/main-page/main-page.scss';
import './styles.scss';
import './components/menu/menu.scss';
import './components/footer/footer.scss';
import { makeMenu } from './components/menu/menu';
import {  listenCards, listenMenu, listenMusic } from './listen';
import { chooseCategory } from './components/categories/choose-category';
import { makeMainField } from './components/main-page/main-page';
import  './components/header/header.scss';
import { makeHeader } from './components/header/header';
import { makeFooter, makeStartGameBtn } from './components/footer/footer';



window.onload = () => {
  const bodyElement:HTMLElement | null = document.getElementById('body');
  if (!bodyElement) throw Error('bodyElement not found');
  makeMenu();
  makeHeader();

    makeMainField();
  listenMenu();
  listenCards();
  listenMusic();
  chooseCategory();
  makeFooter();
}
