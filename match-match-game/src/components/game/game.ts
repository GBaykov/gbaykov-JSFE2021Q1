import { BaseComponent } from "../base-component";
import { Card } from "../card/card";

export class Game extends BaseComponent {
  constructor(images:string[]) {
    super();

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);
  }

}
