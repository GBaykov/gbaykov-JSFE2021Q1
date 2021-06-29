import DATA_OF_CARDS from "../../data";
import { createElement } from "../../shared/add-element";
import { makeCard } from "./card";

export const makeCardField = (category:number):void => {
  const arr = DATA_OF_CARDS[category];
  let html = ``;
 for(let i =0; i < arr.length; i++) {
     html +=`<div class ="card-container">${makeCard(arr[i].word, arr[i].image, arr[i].translation, arr[i].audioSrc)} </div>`
 }
 createElement('div','cards-field', html, 'main')
//  const mainElement:HTMLElement | null = document.getElementById('main');
//  if (!mainElement) throw Error('mainElement element not found');
//  const cardField:HTMLElement = document.createElement('div')
//  cardField.classList.add('cards-field');
//  cardField.innerHTML = html;
//  mainElement.appendChild(cardField)
//  document.body.appendChild(mainElement);
};
