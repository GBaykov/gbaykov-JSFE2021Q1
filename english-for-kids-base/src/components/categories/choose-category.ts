import { deleteCardField } from "../../shared/delete-card-field";
import { makeCardField } from "../card/card-field";
import { makeMainField } from "../main-page/main-page";

export const chooseCategory = ():void => {
  document.addEventListener('click', (event:MouseEvent) => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if(target.classList.contains('menu-element')) {
      const id:number = Number(target.id.split('-')[2]);
      deleteCardField();
      if(id === 10) {
        makeMainField();
      }
       else makeCardField(id)
    }
  })
}


