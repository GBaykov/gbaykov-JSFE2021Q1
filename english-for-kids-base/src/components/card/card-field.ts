import DATA_OF_CARDS from "../../data";
import { makeCard } from "./card";

export const makeCardField =  (category:number) => {
  const arr = DATA_OF_CARDS[category];
  let html = ``;
 for(let i =0; i < arr.length; i++) {
     html +=`<div class ="card-container">${makeCard(arr[i].word, arr[i].image, arr[i].translation)} </div>`
 }
 const mainElement = document.getElementById('main');
 if (!mainElement) throw Error('mainElement element not found');
 mainElement.classList.add('cards-field')
 mainElement.innerHTML = html;
 document.body.appendChild(mainElement);
} ;
