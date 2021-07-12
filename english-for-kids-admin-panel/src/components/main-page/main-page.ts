import { IMG_URL } from '../../constants';
import { DATA_OF_CATEGORIES } from '../../data';
import { createElement } from '../../shared/add-element';
import { deleteElement } from '../../shared/delete-element';

export const makeCardCategory = (ids:number | string, categ:string, name:string, image:string) => `
<div class="card menu-element" id="card-${categ}-${ids}">
  <div class="card__front circle-container menu-element" if="card-front-${ids}">
    <div class="card-img-container " >
      <img class="card-img circle menu-element" id="card-img-${ids}" src='${IMG_URL}/${image}' >
    </div>
    <div class="card-text-container menu-element" id="card-text-${ids}">
      <p class="card-name">${name}</p>
    </div>
  </div>
</div>
`;
export const makeMainField = ():void => {
  const arr = DATA_OF_CATEGORIES;
  let html = '';
  for (let i = 0; i < arr.length; i++) {
    html += `<div class ="card-container menu-element" id="card-cont-${arr[i].ids}">${makeCardCategory(arr[i].ids, arr[i].categ, arr[i].name, arr[i].image)} </div>`;
  }
  deleteElement('cards-field', 'main');

  createElement('div', 'cards-field', html, 'main');
};
