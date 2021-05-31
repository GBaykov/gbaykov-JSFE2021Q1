import { BaseComponent } from '../base-component';

export const registrBtn = document.createElement('button');
registrBtn.innerText = 'register new player';
registrBtn.classList.add('btn__register');

export const startBtn = document.createElement('button');
startBtn.innerText = 'Start Game';
startBtn.classList.add('btn__start');
startBtn.classList.add('displayNone');

export const stopBtn = document.createElement('button');
stopBtn.innerText = 'Stop Game';
stopBtn.classList.add('btn__stop');
stopBtn.classList.add('displayNone');

export class ChangeableBtn extends BaseComponent {
  constructor() {
    super('div', ['btn']);
    this.element.appendChild(registrBtn);
    this.element.appendChild(startBtn);
    this.element.appendChild(stopBtn);
  }
}
