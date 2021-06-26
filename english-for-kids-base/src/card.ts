


//import './card.scss';
import { imgPatр } from '../public/img/waytest';
import { imgPatg } from './assets/img/waytest';
import DATA_OF_CARDS from './data';
imgPatg
imgPatр
const FLIP_CLASS = 'flipped';
const src = 'https://raw.githubusercontent.com/tropler/english-for-kids-data/master/img/'


export const makeCard = (word:string, image:string, translation:string) => `
<div class="card">
  <div class="card__front" >
  <div class="card__bgi" style="background-image: url('${src}/${image}')"></div>
  <img src='${src}/${image}' >

    <p class="card-name">${word}</p>
    <div class='flip-btn-container'> </div>
  </div>
  <div class="card__back" style="background-image: url('${image}')" >
    <p class="card-translation">${translation}</p>
  </div>
</div>
`;

// type Card = {

// }
export const makeCardField =  (category:number) => {
   const arr = DATA_OF_CARDS[category];
   let html = ``

  for(let i =0; i < arr.length; i++) {
    // alert( arr[i].word)
    (arr[i].translation)

      html +=`<div class ="card-container">${makeCard(arr[i].word, arr[i].image, arr[i].translation)} </div>`
  }

const root = document.createElement('div');
root.classList.add('cards-field')
  root.innerHTML = html;
  document.body.appendChild(root);
} ;


// export class Card extends BaseComponent {
//   isFlipped = false;

//   constructor(readonly image: string) {
//     super('div', ['card-container']);

//     this.element.innerHTML = `
//       <div class="card">
//         <div class="card__front" style="background-image: url('')" ></div>
//         <div class="card__back" style="background-image: url('')">
//           <div class='flip-btn-container'> </div>
//         </div>
//       </div>
//     `;
//   }

//   flipToBack() {
//     this.isFlipped = true;
//     return this.flip(true);
//   }

//   flipToFront() {
//     this.isFlipped = false;
//     return this.flip();
//   }

//   private flip(isFront = false): Promise<void> {
//     return new Promise((resolve) => {
//       this.element.classList.toggle(FLIP_CLASS, isFront);
//       this.element.addEventListener('transitionend', () => resolve(), {
//         once: true,
//       });
//     });
//   }
// }
