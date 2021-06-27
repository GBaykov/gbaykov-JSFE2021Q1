import { imgPatр } from '../../../public/img/waytest';
import { imgPatg } from '../../assets/img/waytest';
import DATA_OF_CARDS from '../../data';
const FLIP_CLASS = 'flipped';
const src = 'https://raw.githubusercontent.com/GBaykov/English-for-kids-data/master/img/'

export const makeCard = (word:string, image:string, translation:string) => `
<div class="card">
  <div class="card__front" >
    <div class="card-img-container" >
      <img class="card-img" src='${src}/${image}' >
    </div>
    <div class="card-text-container" >
      <span class="card-name">${word}</span>
      <span class='flip-btn'> </span>
    </div>
  </div>

  <div class="card__back"  >
    <p class="card-translation">${translation}</p>
  </div>
</div>
`;

