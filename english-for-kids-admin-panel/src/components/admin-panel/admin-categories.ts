import { IMG_URL } from "../../constants";
import { DATA_OF_CARDS, DATA_OF_CATEGORIES } from "../../data";
import { createElement } from "../../shared/add-element";
import { deleteElement } from "../../shared/delete-element";

export const makeAdminCategoryCard = (ids:number | string, categ:string, name:string, length:number) => `
<div class="card" id="card-${categ}-${ids}">
  <div class="card__front" id="card-front-${ids}">
    <p class="card-cross"></p>
    <div class="card-text-container admin-text" id="card-text-${ids}">
      <p class="card-name">${name}</p>
      <p class="card-count">Words:${length}</p>
    </div>
    <div class="admin-bnts">
      <p class="update-categ">
        <button class="categ-btn">Update</button>
      </p>
      <p class="add-word">
        <button class="categ-btn">Add word</button>
      </p>
    </div>
  </div>
</div>
`;
//arr.length && i <category.length
export const makeAdminCategories = ():void => {
  const arr = DATA_OF_CATEGORIES;
  const category = DATA_OF_CARDS;
  let html = '';
  for (let i = 0; i <2 ; i++) {
    html += `<div class ="card-container menu-element" id="card-cont-${arr[i].ids}">${makeAdminCategoryCard(arr[i].ids, arr[i].categ, arr[i].name, arr[i].length)} </div>`;
  }
  deleteElement('cards-field', 'main');

  createElement('div', 'cards-field', html, 'main');
 // listenAdminScroll()
};
// <div class="card-img-container " >
//       <img class="card-img circle menu-element" id="card-img-${ids}" src='${IMG_URL}/${image}' >
//     </div>




export var loadMore = function() {
  const listElm:HTMLElement | null = document.querySelector('.cards-field');
  if(!listElm) throw Error('listElm(cards-field) not found');
  listElm.classList.add('scroll-field')
  const arr = DATA_OF_CATEGORIES;
  const category = DATA_OF_CARDS;
// Add 20 items.
let html = '';
  for (let i = 2; i < arr.length && i <category.length; i++) {
    html += `<div class ="card-container menu-element" id="card-cont-${arr[i].ids}">${makeAdminCategoryCard(arr[i].ids, arr[i].categ, arr[i].name, arr[i].length)} </div>`;
    const htmlElem = `${makeAdminCategoryCard(arr[i].ids, arr[i].categ, arr[i].name, arr[i].length)}`
    const divElem = document.createElement('div');
    divElem.classList.add('card-container','menu-element')
    divElem.innerHTML = htmlElem;
    listElm.appendChild(divElem)
  }

}

export function listenAdminScroll() {
  const listElm:HTMLElement | null = document.querySelector('.cards-field');
  if(!listElm) throw Error('listElm(cards-field) not found');
  listElm.classList.add('scroll-field')
// Detect when scrolled to bottom.
listElm.addEventListener('click', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {//listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight
    alert('work')
    loadMore();
  } else('not')
});
}
