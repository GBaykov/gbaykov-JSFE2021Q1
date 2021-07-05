export const makeMenuElemActive = ():void => {
  const elements = document.querySelectorAll('.menu-element');
  for (const elem of elements) {
    elem.classList.remove('active_menu');
  }
  document.addEventListener('click', (event) => {
    if (event === null) throw Error('MouseEvent === null');
    const target = event.target as Element;
    if (target.classList.contains('menu-element')) {
      target.classList.add('active_menu');
    }
  });
};
