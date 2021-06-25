import { BaseComponent } from '../base-component';
import './card.scss';

const FLIP_CLASS = 'flipped';
const SRC = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/07.jpg';



export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);

    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('${SRC}')" ></div>
        <div class="card__back" style="background-image: url('${SRC}')">
          <div class='flip-btn-container'> </div>
        </div>
      </div>
    `;
  }

  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
