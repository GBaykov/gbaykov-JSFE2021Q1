export const listenMenu = ():void => {
  const menuBar: Element | null = document.querySelector('.menu-bar');
  if (!menuBar) throw Error ('menu-bar element not found');
  const span:Element | null = document.querySelector('.menu-bar-span');
  if (!span) throw Error ('menu-bar-span element not found');
  const menu:Element | null = document.querySelector('.menu');
  if (!menu) throw Error ('menu-bar-span element not found');

  menuBar.addEventListener('click', ():void => {
    span.classList.toggle('active');
    menu.classList.toggle('animate');
  });

  document.onclick = function fbar(event:MouseEvent):void {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if (target !==null) {
      if (!target.classList.contains('menu-bar')) {
        span.classList.remove('active');
        menu.classList.remove('animate');
      }
    }
  };
}

// export const cardLisener


