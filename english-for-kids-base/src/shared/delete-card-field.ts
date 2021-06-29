export const deleteCardField = () => {
  const cardField: HTMLElement | null = document.querySelector('.cards-field');
  if(cardField) {
    const main:HTMLElement | null = document.getElementById('main');
    if(main === null) throw Error;
    main.removeChild(cardField)
  }
}
