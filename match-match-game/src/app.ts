// export class App {
//   constructor(private readonly rootElement:HTMLElement){
//   }
// }   то же самое -- синтаксический сахар
export class App {
   private readonly rootElement:HTMLElement;

  constructor(element: HTMLElement) {
    this.rootElement = element;
  }
}
