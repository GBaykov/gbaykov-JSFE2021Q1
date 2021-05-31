// import './about-game.scss';
import { BaseComponent } from '../base-component';
//import { sittingAria } from '../game-settings/game-setting';

export const mainAria:HTMLElement = document.createElement('div');
export const originalMainAria = `<p class="about-text">How to play?</p>
<p  class="first-rule"> </p>
<p  class="second-rule"> </p>
<p  class="third-rule"> </p>
<p class="register-rule"></p>
<p class="setting-rule">Game Setting</p>
<p class="field-rule"></p>
`;
mainAria.innerHTML = originalMainAria;
mainAria.classList.add('main-aria');

export class AboutAria extends BaseComponent {
  private readonly app: HTMLElement;

  constructor(element: HTMLElement) {
    super('div', ['main-aria']);
    this.app = element;
    this.app.appendChild(mainAria);
  }
}
