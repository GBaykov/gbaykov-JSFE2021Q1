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

//  export const listenCards = () => {
//   document.addEventListener('click', (event:MouseEvent) => {
//     if(event === null) throw Error ('MouseEvent === null');
//     const target = event.target as Element;
//     if(target.classList.contains('flip-btn')) {
//       const arr:string[] = target.id.split('-');
//       const word:string = arr[2];
//       const card:HTMLElement | null = document.getElementById(`card-${word}`);
//       if(card === null) throw Error (`card element with id 'card-${word}' not found`);
//       card.classList.add('flipped');
//     }

//  })
// }

export function listenCards() {
  let rot;
  const cards:any = document.querySelectorAll('.card');
  const rotate = document.querySelectorAll('.flip-btn');
  for (let i = 0, len = cards.length; i < len; i++) {
    const card = cards[i];
    rot = rotate[i];

    rot.addEventListener('click', () => {
      const c = card.classList;
      if (c.contains('flipped')) {
        c.remove('flipped'); } else {
          c.add('flipped');
      }
    });
    // card.onmouseleave = function rotat1() {
    //   card.classList.remove('flipped');
    // };
  }
};

export const listenMusic = () => {
  document.addEventListener('click', (event:MouseEvent) => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if (target.classList.contains('music-icon')) {
      alert('music-btn works');
      const audio:any = document.querySelector('.image-audio')
      audio.play();
    }
  })
}
