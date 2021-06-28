import { makeCardField } from "../card/card-field";

export const chooseCategory = ():void => {
  document.addEventListener('click', (event:MouseEvent) => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if(target.classList.contains('menu-element')) {
      const id:number = Number(target.id.split('-')[2]);
      deleteCardField()
      makeCardField(id)
    }
  })
}

export const deleteCardField = () => {
  const cardField: HTMLElement | null = document.querySelector('.cards-field');
  if(cardField) {
    const main:HTMLElement | null = document.getElementById('main');
    if(main === null) throw Error;
    main.removeChild(cardField)
  }
}
