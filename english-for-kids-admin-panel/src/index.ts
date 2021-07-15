import './components/card/card.scss';
import './components/main-page/main-page.scss';
import './styles.scss';
import './components/menu/menu.scss';
import './components/footer/footer.scss';
import { makeMenu } from './components/menu/menu';
import {
  listenCards, listenMenu, listenMusic, listenStatOfMeny,
} from './listen';
import { chooseCategory } from './components/categories/choose-category';
import { makeMainField } from './components/main-page/main-page';
import './components/header/header.scss';
import { makeHeader } from './components/header/header';
import { makeFooter } from './components/footer/footer';
import { startGame } from './game/game-start';
import { changeMode } from './game/change-mode';
import './components/statistics/statistics.scss';
import { makeAdminCategories } from './components/admin-panel/admin-categories';
import  './components/admin-panel/admin.scss';
import { makeAdminWords } from './components/admin-panel/admin-words';
import { listenLogIn } from './components/admin-panel/listen-logIn';

window.onload = () => {
  const bodyElement:HTMLElement | null = document.getElementById('body');
  if (!bodyElement) throw Error('bodyElement not found');
  makeMenu();
  makeHeader();

  makeAdminCategories()
  //listenAdminScroll()
  makeMainField();
  listenMenu();
  listenCards();
  listenMusic();
  chooseCategory();
  makeFooter();
  startGame();
  changeMode();
  listenStatOfMeny();
  listenLogIn()
};
