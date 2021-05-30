// export class App {
//   constructor(private readonly rootElement:HTMLElement){
//   }
// }   то же самое -- синтаксический сахар
import { difficulty, gameCards } from "./components/game-settings/game-setting";
import { Game } from "./components/game/game";
import { ImageCategoryModel } from "./models/image-category-model"


export class App {
   private readonly rootElement:HTMLElement;
   private readonly game: Game;

  constructor(element: HTMLElement) {
    this.rootElement = element;
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
  }

 async start() {
    const res = await fetch('./images.json');
    const categories:ImageCategoryModel[] = await res.json();
    let cat:ImageCategoryModel = categories[0];
    if(difficulty.value == 'easy' && gameCards.value == 'unsorted' ) {
       cat = categories[0];
    }
    if(difficulty.value == 'hard' && gameCards.value == 'unsorted' ) {
      cat = categories[1];
   }
    if (difficulty.value == 'easy' && gameCards.value == 'starWars') {
      cat = categories[2];
    }
    if (difficulty.value == 'hard' && gameCards.value == 'starWars') {
      cat = categories[3];
    }
    //else cat = categories[3];
    // cat = categories[1];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}
