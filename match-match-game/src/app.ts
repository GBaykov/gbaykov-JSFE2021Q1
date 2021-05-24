// export class App {
//   constructor(private readonly rootElement:HTMLElement){
//   }
// }   то же самое -- синтаксический сахар
import { CardsField } from "./components/cards-field/cards-field";


export class App {
   private readonly rootElement:HTMLElement;
   private readonly cardsField: CardsField;

  constructor(element: HTMLElement) {
    this.rootElement = element;
    this.cardsField = new CardsField();
    this.rootElement.appendChild(this.cardsField.element);
  }

}
