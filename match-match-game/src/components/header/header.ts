import { BaseComponent } from '../base-component';
import { changeableBtn } from '../change-btns/change-btns';
import { navRouter } from '../nav-router/nav-router';

export const logo = document.createElement('p');
logo.innerText = 'match';
logo.classList.add('logo');

export class Header extends BaseComponent {
  private readonly nav: navRouter;

  private readonly elementH:HTMLElement;

  private readonly changeBtn:changeableBtn;

  constructor(element: HTMLElement) {
    super('div', ['header']);
    this.nav = new navRouter();
    this.changeBtn = new changeableBtn();
    this.elementH = element;
    this.element.appendChild(logo);
    this.element.appendChild(this.nav.element);
    this.element.appendChild(this.changeBtn.element);
  }

  addHeadElem() {
    this.elementH.appendChild(this.nav.element);
  }
}

export class HeaderCompil extends BaseComponent {
  private readonly header: Header;

  private readonly headComp: HTMLElement;

  constructor(element: HTMLElement) {
    super('div', ['header']);
    this.header = new Header(this.element);
    this.headComp = element;
    this.headComp.appendChild(this.header.element);
  }
}
