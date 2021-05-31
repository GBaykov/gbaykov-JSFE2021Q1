import { BaseComponent } from '../base-component';
import { Header } from './header';

export class HeaderCompil extends BaseComponent {
  private readonly header: Header;

  private readonly headComp: HTMLElement;

  constructor(element: HTMLElement) {
    super('div', ['header']);
    this.header = new Header(this.element);
    this.headComp = element;
  }

  compil() {
    this.headComp.appendChild(this.header.element);
  }
}

// export function headerDeclar(elem:HTMLElement) {
//   new HeaderCompil(elem);
// }
