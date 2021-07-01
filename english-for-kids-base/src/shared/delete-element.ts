// export const deleteCardField = () => {
//   const cardField: HTMLElement | null = document.querySelector('.cards-field');
//   if(cardField) {
//     const main:HTMLElement | null = document.getElementById('main');
//     if(main === null) throw Error;
//     main.removeChild(cardField)
//   }
// }
// export const deleteFooter = () => {
//   const footer: HTMLElement | null = document.querySelector('.footer');
//   if(footer) {
//     const body:HTMLElement | null = document.getElementById('body');
//     if(body === null) throw Error;
//     body.removeChild(footer)
//   }
// }
export const deleteElement = (childClass: string, parentId:string) => {
  const child: HTMLElement | null = document.querySelector(`.${childClass}`);
  if(child) {
    const parent:HTMLElement | null = document.getElementById(`${parentId}`);
    if(parent === null) throw Error;
    parent.removeChild(child)
  }
}
