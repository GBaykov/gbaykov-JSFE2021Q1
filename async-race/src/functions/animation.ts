import store from "../store";

export function  animation(car:any, distance:number, animationTime:number) {
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

// export function  stopAnimation(car:any, distance:number, animationTime:number) {
//   let start:number | null = null;
//   const state:any = {};  // TO DO: исправить any на объект (при объекте Свойство "id" не существует в типе "{}" )

//   function step(timestamp:number) {
//     if (!start) start = timestamp;
//     const time = timestamp - start;
//     const passed = Math.round(time * (distance / animationTime));

//     car.style.transform = `translateX(0)`;

//     if (passed < distance) {
//       state.id = window.cancelAnimationFrame(step);
//     }
//   }
//   state.id = window.cancelAnimationFrame(step);
//   return state;
// }
