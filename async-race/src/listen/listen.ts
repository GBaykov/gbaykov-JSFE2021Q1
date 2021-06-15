import { createCar, deleteCar, deleteWinner, getCar, saveWinner, updateCar } from "../api";
import { carDef, renderGarage } from "../components/garage-page/garage";
import { updateStateGarage } from "../components/garage-page/updateGarage";
import { renderWinners } from "../components/winners-page/winners";
import { startDriving, stopDriving } from "../functions/driving";
import { generateRandomCars } from "../functions/getRandomFunctions";
import { race } from "../functions/racing";
import store from "../store";

export let selectedCar = {
  "name": "Tesla",
  "color": "#e6e6fa",
  "id": 1
}

export function listenProb () {
document.body.addEventListener('click', async(event:MouseEvent) => {
  if(event.target.classList.contains('winners-menu-button')) {
    const garagelist: HTMLElement | null = document.getElementById('garage-view');
const winnerslist: HTMLElement | null = document.getElementById('winners-view');
    garagelist.classList.add('displayNone')
    winnerslist.classList.remove('displayNone')
  }
  if(event.target.classList.contains('garage-menu-button')) {
    const garagelist: HTMLElement | null = document.getElementById('garage-view');
const winnerslist: HTMLElement | null = document.getElementById('winners-view');
    garagelist.classList.remove('displayNone');
    winnerslist.classList.add('displayNone')
  }

  if (event.target.classList.contains('start-engine-button')) {
    const arr = event.target.id.split('-')
    const id = Number(arr[3])
    await startDriving(id)

  }
  if (event.target.classList.contains('stop-engine-button')) {
    const arr = event.target.id.split('-')
    const id = Number(arr[3])
    await stopDriving(id)

  }

  if (event.target.classList.contains('remove-button')) {

    const id = + event.target.id.split('-')[2]
    await deleteCar(id);
    await deleteWinner(id);

    document.getElementById('garage').innerHTML = await renderGarage()
  }

  if(event.target.classList.contains('select-button')) {
const id = event.target.id.split('-')[2];
     selectedCar = await getCar(id)

    document.getElementById('update-name').value = selectedCar.name;
    document.getElementById('update-color').value = selectedCar.color;

    document.getElementById('update-name').disabled = false;
    document.getElementById('update-color').disabled = false;
    document.getElementById('update-submit').disabled = false;

  }
  if(event.target.classList.contains('create-button')) {
    event.preventDefault();

  const carExample = {
  "name": "New Red Car",
  "color": "#ff0000" }
  carExample.name = document.getElementById('create-name').value;
  carExample.color = document.getElementById('create-color').value;
  if(!carExample.name) {
    carExample.name = 'A nazvanie?'
   }
     await createCar(carExample);
     document.getElementById('garage').innerHTML = await renderGarage();
  }

  if(event.target.classList.contains('update-button')) {
    event.preventDefault();
    const carExample = {
    "name": "New Red Car",
    "color": "#ff0000" }
    carExample.name = document.getElementById('update-name').value;
    carExample.color = document.getElementById('update-color').value;
     await updateCar(selectedCar.id, carExample);
     document.getElementById('garage').innerHTML = await renderGarage();
  }
  if (event.target.classList.contains('generator-button')) {
    let n:number;
    event.target.disabled = true;
    if(event.target.id === 'generator') {
      n = 10;
    }
    else n = 100;
    const cars =  generateRandomCars(n);
    await Promise.all(cars.map(async c => createCar(c)));
    await updateStateGarage();
    document.getElementById('garage').innerHTML = await renderGarage()
    event.target.disabled = false;
  }
  if(event.target.classList.contains('race-button')) {
    alert("race")
    event.target.disabled = true;
    const winner = await race(startDriving);
    await saveWinner(winner);
    const message  = document.getElementById('message');
    message.innerHTML = `${winner.name} went first (${winner.time})!`;
    message?.classList.toggle('visible', true)
    document.getElementById('reset').disable = false;
  }
  if (event.target.classList.contains('reset-button')) {
    alert('reset')
    event.target.disabled = true;
    store.cars.map(({id}) => stopDriving(id));
    const message = document.getElementById('message');
    message?.classList.toggle('visible', false);
    document.getElementById('raca').disabled = false;
  }
})
}

