import { BaseComponent } from '../base-component';

// export class aboutBtn extends BaseComponent {
//   constructor() {
//     super("button", ['nav__about-btn']);
//     this.element.innerText = 'About Game';
//   }
// }

export const aboutBtn = document.createElement('button');
aboutBtn.innerText = 'About Game';
aboutBtn.classList.add('nav__about-btn');
aboutBtn.classList.add('activ-rout');

export const scoreBtn = document.createElement('button');
scoreBtn.innerText = 'Best Score';
scoreBtn.classList.add('nav__setting-btn');

export const settingBtn = document.createElement('button');
settingBtn.innerText = 'Game Setting';
settingBtn.classList.add('nav__setting-btn');

export class navRouter extends BaseComponent {
  // private readonly about: aboutBtn;

  constructor() {
    super('div', ['nav']);
    // this.about = new aboutBtn;
    // this.element.appendChild(this.about.element);
    this.element.appendChild(aboutBtn);
    this.element.appendChild(scoreBtn);
    this.element.appendChild(settingBtn);
  }
}
