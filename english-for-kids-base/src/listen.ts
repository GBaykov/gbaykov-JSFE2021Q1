import { makeStatistics } from "./components/statistics/statistics";
import DATA_OF_CARDS from "./data";

export const listenMenu = ():void => {
  const span:Element | null = document.querySelector('.menu-bar-span');
  if (!span) throw Error ('menu-bar-span element not found');
  const menu:Element | null = document.querySelector('.menu');
  if (!menu) throw Error ('menu-bar-span element not found');

  document.onclick = (event:MouseEvent):void => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
      if (target.classList.contains('menu-bar') || target.classList.contains('menu-bar-span')) {
        span.classList.toggle('active');
        menu.classList.toggle('animate');
      } else {
        span.classList.remove('active');
        menu.classList.remove('animate');
    }
  };
}

 export const listenCards = () => {
    document.addEventListener('click', (event:MouseEvent) => {
      if(event === null) throw Error ('MouseEvent === null');
      const target = event.target as Element;
      if(target.classList.contains('flip-btn')) {
        const arr:string[] = target.id.split('-');
        const word:string = arr[2];
        const card:HTMLElement | null = document.getElementById(`card-${word}`);
        if(card === null) throw Error (`card element with id 'card-${word}' not found`);
        card.classList.toggle('flipped');
      }
   })
}


export const listenMusic = ():void => {
  document.addEventListener('click', (event:MouseEvent) => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if (target.classList.contains('music-icon')) {
      const arr:string[] = target.id.split('-');
      const word:string = arr[2];
      const audio  = document.getElementById(`audio-${word}`) as HTMLMediaElement;
      if(audio === null) throw Error (`card element with id 'card-${word}' not found`);
      audio.play();
    }
  })
}

export const listenRepeatBtn = (audio:HTMLAudioElement) => {
  document.addEventListener('click', (event) => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if(target.classList.contains('repeat-btn')) {
      audio.play()
    }
  })
}
export const listenStatOfMeny = ():void => {
  document.addEventListener('click', (event) => {
    if(event === null) throw Error ('MouseEvent === null');
    const target = event.target as Element;
    if(target.classList.contains('statistics')) {
      makeStatistics(DATA_OF_CARDS)
    }
  })
}
