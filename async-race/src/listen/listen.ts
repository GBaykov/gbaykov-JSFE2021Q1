import { createCar, deleteCar, deleteWinner, getCar } from "../api";
import { carDef, renderGarage } from "../components/garage-page/garage";
import { renderWinners } from "../components/winners-page/winners";
import { startDriving, stopDriving } from "../functions/driving";


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
    alert('remove')
    const id = + event.target.id.split('-')[2]
    await deleteCar(id);
    await deleteWinner(id);

    document.getElementById('garage').innerHTML = await renderGarage()
  }
  if(event.target.classList.contains('select-button')) {
const id = event.target.id.split('-')[2];
    const selectedCar = await getCar(id)

    document.getElementById('update-name').value = selectedCar.name;
    document.getElementById('update-color').value = selectedCar.color;

    document.getElementById('update-name').disabled = false;
    document.getElementById('update-color').disabled = false;
    document.getElementById('update-submit').disabled = false;

  }
  if(event.target.classList.contains('create-button')) {
    event.preventDefault();

    alert('sdf')
const carProb = {
  "name": "New Red Car",
  "color": "#ff0000" }
  carProb.name = document.getElementById('create-name').value;
  carProb.color = document.getElementById('create-color').value;
  alert(carProb.name)
     await createCar(carProb);
     alert(carProb)
     document.getElementById('garage').innerHTML = await renderGarage();

  }

})
}

