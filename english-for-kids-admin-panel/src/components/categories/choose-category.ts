import { IMG_URL } from '../../constants';
import { DATA_OF_CATEGORIES } from '../../data';
import { CURRENT_STATE } from '../../game/current-state';
import { deleteElement } from '../../shared/delete-element';
import { makeAdminCategories } from '../admin-panel/admin-categories';
import { makeAdminWords } from '../admin-panel/admin-words';
import { makeCardField } from '../card/card-field';
import { makeFooter } from '../footer/footer';
import { makeMainField } from '../main-page/main-page';
import { makeMenuElemActive } from '../menu/active-menu';
import { makeStartGameBtn } from '../start-game-btn';

export const setBgImage = (id:number) => {
  const main:HTMLElement | null = document.getElementById('main');
  if (!main) throw Error;
  const image = `${DATA_OF_CATEGORIES[id].image}`;

  main.style.backgroundImage = `URL(${IMG_URL}/${image})`;
};

export const chooseCategory = ():void => {
  document.addEventListener('click', (event:MouseEvent) => {
    if (event === null) throw Error('MouseEvent === null');
    const target = event.target as Element;
    if (target.classList.contains('menu-element')) {
      const id = Number(target.id.split('-')[2]);
      CURRENT_STATE.category = id;
      deleteElement('cards-field', 'main');
      deleteElement('footer', 'body');
      deleteElement('start-game', 'body');
      deleteElement('table-wrapper', 'main');
      makeMenuElemActive();
      if (id === 10) {
        makeMainField();
        makeFooter();
      } else {
        if(target.classList.contains('menu-admin-elem')) {
          makeAdminWords(id)
          makeFooter();
        } else {
          makeCardField(id);
          makeStartGameBtn();
          makeFooter();
          //setBgImage(id);
        }

      }
    }
  });
};
