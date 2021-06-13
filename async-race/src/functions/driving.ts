import { startEngine } from "../api";
import store from "../store";
import { animation } from "./animation";
import { getDistanceBetweenElements } from "./positionFunctions";

const startDriving = async (id:number) => {
  const startButton:HTMLElement | null = document.getElementById(`start-engine-car-${id}`);
  //startButton.disabled = true;
  //startButton.classList.toggle('enabling', true);

  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);

  //startButton.classList.toggle('enabling', false);
  //document.getElementById(`stop-engine-car-${id}`).disabled = false;

  const car  = document.getElementById(`car-${id}`);
  const flag = document.getElementById(`flag-${id}`);
  const htmlDistance: number= Math.floor(getDistanceBetweenElements(car, flag) + 100)

  //store.animation[id] = animation(car, htmlDistance, time);

  const {success} = await drive(id);
  if(!success) window.cancelAnimationFrame(store.animation[id].id);

  return {success, id, time}
}
