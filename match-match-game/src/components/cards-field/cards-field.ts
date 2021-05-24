import './cards-field.scss';
import { BaseComponent } from "../base-component";
import { Card } from '../card/card';

export class CardsField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['cards-field'])
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCard(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
  }

}
