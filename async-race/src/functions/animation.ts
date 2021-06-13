import store from "../store";

export function  animation(car:HTMLElement, distance:number, animationTime:number) {
  let start:number | null = null;
  const state:any = {};  // TO DO: исправить any на объект (при объекте Свойство "id" не существует в типе "{}" )

  function step(timestamp:number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animationTime));

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);
  return state;
}
