import { IMG_URL } from "../../constants";
import { DATA_OF_CATEGORIES } from "../../data";
import { CURRENT_STATE } from "../../game/current-state";
import { deleteElement } from "../../shared/delete-element";
import { makeCardField } from "../card/card-field";
import { makeFooter } from "../footer/footer";
import { makeMainField } from "../main-page/main-page";
import { makeStartGameBtn } from "../start-game-btn";


export const chooseCategory = ():void => {
  document.addEventListener('click', (event:MouseEvent) => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if(target.classList.contains('menu-element')) {
      const id:number = Number(target.id.split('-')[2]);
      CURRENT_STATE.category = id;
      deleteElement('cards-field','main');
      deleteElement('footer','body');
      deleteElement('start-game','body');

      if(id === 10) {
        makeMainField();
        makeFooter()
      }
       else makeCardField(id),makeStartGameBtn(), makeFooter()//makeAproptiateMode(mode);
    }
  })
}
export const setBgImage = (id:number) => {
const main:HTMLElement | null = document.getElementById('main');
if(!main) throw Error;
const image:string = DATA_OF_CATEGORIES[id].image;
main.style.backgroundImage = `${IMG_URL}/${image}`;
}
