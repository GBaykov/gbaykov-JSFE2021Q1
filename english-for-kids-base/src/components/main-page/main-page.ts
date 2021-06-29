import { IMG_URL } from "../../constants";
import { DATA_OF_CATEGORIES } from "../../data";
import { deleteCardField } from "../../shared/delete-card-field";

export const makeCardCategory  = (ids:number | string, categ:string, name:string, image:string) => `
<div class="card " id="card-${categ}">
  <div class="card__front circle-container menu-element" if="card-front-${ids}">
    <div class="card-img-container " >
      <img class="card-img circle menu-element" id="card-img-${ids}" src='${IMG_URL}/${image}' >
    </div>
    <div class="card-text-container" >
      <p class="card-name">${name}</p>
    </div>
  </div>
</div>
`;
export const makeMainField = ():void => {
  const arr = DATA_OF_CATEGORIES;
  let html = ``;
 for(let i =0; i < arr.length; i++) {
     html +=`<div class ="card-container">${makeCardCategory(arr[i].ids, arr[i].categ, arr[i].name, arr[i].image)} </div>`
 }
 const mainElement:HTMLElement | null = document.getElementById('main');
 if (!mainElement) throw Error('mainElement element not found');
 deleteCardField();
 const cardField:HTMLElement = document.createElement('div');
 cardField.classList.add('cards-field');
 cardField.innerHTML = html;
 mainElement.appendChild(cardField)
 document.body.appendChild(mainElement);
};
