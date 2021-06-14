import { startEngine, stopEngine } from "../api";
import store from "../store";
import { animation, stopAnimation } from "./animation";
import { getDistanceBetweenElements } from "./positionFunctions";

export const startDriving = async (id:number) => {
  const startButton = document.getElementById(`start-engine-car-${id}`);
  startButton.disabled = true;
  startButton.classList.toggle('enabling', true);

  const { velocity, distance } = await startEngine(id);

  const time = Math.round(distance / velocity);
  startButton.classList.toggle('enabling', false);
  document.getElementById(`stop-engine-car-${id}`).disabled = false;

  const car  = document.getElementById(`car-${id}`);
  const flag = document.getElementById(`flag-${id}`);
  const htmlDistance: number= Math.floor(getDistanceBetweenElements(car, flag) + 100)

   animation(car, htmlDistance, time);

  //const {success} = await drive(id);
  //if(!success) window.cancelAnimationFrame(store.animation[id].id);

  //return {success, id, time}
}

export const stopDriving = async (id:number) => {
  const stopButton:HTMLElement | null = document.getElementById(`stop-engine-car-${id}`);
  stopButton.disabled = true;
  stopButton?.classList.toggle('enabling', true);

  const car = document.getElementById(`car-${id}`);


  //await stopEngine(id);
  //stopAnimation(car,0, 0)
  //stopButton?.classList.toggle('enabling', false);
  //document.getElementById(`start-engine-button${id}`).disabled = false;
  const { velocity, distance } = await stopEngine(id);
  car.style.transform = `translateX(${Math.pow(velocity, distance)}px)`
window.cancelAnimationFrame(id)
}
