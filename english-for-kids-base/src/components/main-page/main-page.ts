import { IMG_URL } from "../../constants";
import { DATA_OF_CATEGORIES } from "../../data";
import { deleteCardField } from "../categories/choose-category";

export const gf = '; '

export const makeCardCategory  = (categ:string, name:string, image:string) => `
<div class="card " id="card-${categ}">
  <div class="card__front">
    <div class="card-img-container" >
      <img class="card-img" src='${IMG_URL}/${image}' >
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
     html +=`<div class ="card-container">${makeCardCategory(arr[i].categ, arr[i].name, arr[i].image)} </div>`
 }
 const mainElement:HTMLElement | null = document.getElementById('main');
 if (!mainElement) throw Error('mainElement element not found');
 const cardField:HTMLElement = document.createElement('div');
 deleteCardField();
 cardField.classList.add('cards-field');
 cardField.innerHTML = html;
 mainElement.appendChild(cardField)
 document.body.appendChild(mainElement);
};
