//import './about-game.scss';
import { BaseComponent } from '../base-component';


export const mainAria = document.createElement('div');
mainAria.innerHTML = `<p class="about-text">How to play?</p>
<p  class="first-rule"> </p>
<p  class="second-rule"> </p>
<p  class="third-rule"> </p>
<p class="register-rule"></p>
<p class="setting-rule">Game Setting</p>
<p class="field-rule"></p>
`;
mainAria.classList.add('main-aria');

export class AboutAria extends BaseComponent {
  private readonly app: HTMLElement;
  constructor(element: HTMLElement) {
    super('div', ['main-aria']);
    this.app = element;
this.app.appendChild(mainAria);

  }
}
