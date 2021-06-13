// import { ImageCategoryModel } from './models/image-category-model';

// export class App {
//   private readonly rootElement:HTMLElement;

//   private readonly game: Game;

//   constructor(element: HTMLElement) {
//     this.rootElement = element;

//     this.rootElement.appendChild(this.game.element);
//   }

//   async start() {
//     const res = await fetch('./images.json');
//     const categories:ImageCategoryModel[] = await res.json();
//     let cat:ImageCategoryModel = categories[0];
//     let index = 0;

//     const images = cat.images.map((name) => `${cat.category}/${name}`);
//     this.game.newGame(images);
//   }
// }
