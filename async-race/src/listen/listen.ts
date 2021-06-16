import {
  createCar, deleteCar, deleteWinner, getCar, saveWinner, updateCar,
} from '../api';
import { carDef, renderGarage } from '../components/garage-page/garage';
import { updateStateGarage } from '../components/garage-page/updateGarage';
import { renderWinners } from '../components/winners-page/winners';
import { startDriving, stopDriving } from '../functions/driving';
import { generateRandomCars } from '../functions/getRandomFunctions';
import { race } from '../functions/racing';
import store from '../store';

export let selectedCar = {
  name: 'Tesla',
  color: '#e6e6fa',
  id: 1,
};

export function listenProb() {
  document.body.addEventListener('click', async (event:any) => {
    if (event.target.classList.contains('winners-menu-button')) {
      const garagelist:any = document.getElementById('garage-view');
      const winnerslist:any = document.getElementById('winners-view');
      garagelist.classList.add('displayNone');
      winnerslist.classList.remove('displayNone');
    }
    if (event.target.classList.contains('garage-menu-button')) {
      const garagelist:any = document.getElementById('garage-view');
      const winnerslist:any = document.getElementById('winners-view');
      garagelist.classList.remove('displayNone');
      winnerslist.classList.add('displayNone');
    }

    if (event.target.classList.contains('start-engine-button')) {
      const arr = event.target.id.split('-');
      const id = Number(arr[3]);
      await startDriving(id);
    }
    if (event.target.classList.contains('stop-engine-button')) {
      const arr = event.target.id.split('-');
      const id = Number(arr[3]);
      await stopDriving(id);
    }

    if (event.target.classList.contains('remove-button')) {
      const id = +event.target.id.split('-')[2];
      await deleteCar(id);
      await deleteWinner(id);
      const garage:any = document.getElementById('garage');
      garage.innerHTML = await renderGarage();
    }

    if (event.target.classList.contains('select-button')) {
      const id = event.target.id.split('-')[2];
      selectedCar = await getCar(id);
      const name:any = document.getElementById('update-name');
      name.value = selectedCar.name;
      const color:any = document.getElementById('update-color');
      color.value = selectedCar.color;

      name.disabled = false;
      color.disabled = false;
      const submit: any = document.getElementById('update-submit');
      submit.disabled = false;
    }
    if (event.target.classList.contains('create-button')) {
      event.preventDefault();

      const carExample = {
        name: 'New Red Car',
        color: '#ff0000',
      };
      const createName:any = document.getElementById('create-name');
      carExample.name = createName.value;
      const createColor:any = document.getElementById('create-color');
      carExample.color = createColor.value;
      if (!carExample.name) {
        carExample.name = 'A nazvanie?';
      }
      await createCar(carExample);
      const garage:any = document.getElementById('garage');
      garage.innerHTML = await renderGarage();
    }

    if (event.target.classList.contains('update-button')) {
      event.preventDefault();
      const carExample = {
        name: 'New Red Car',
        color: '#ff0000',
      };
      const updateName:any = document.getElementById('update-name');
      carExample.name = updateName.value;
      const updateColor:any = document.getElementById('update-color');
      carExample.color = updateColor.value;
      await updateCar(selectedCar.id, carExample);
      const garage:any = document.getElementById('garage');
      garage.innerHTML = await renderGarage();
    }
    if (event.target.classList.contains('generator-button')) {
      let n:number;
      event.target.disabled = true;
      if (event.target.id === 'generator') {
        n = 10;
      } else n = 100;
      const cars = generateRandomCars(n);
      await Promise.all(cars.map(async (c) => createCar(c)));
      await updateStateGarage();
      const garage:any = document.getElementById('garage');
      garage.innerHTML = await renderGarage();
      event.target.disabled = false;
    }
    if (event.target.classList.contains('race-button')) {
      event.target.disabled = true;
      const winner = await race(startDriving);
      await saveWinner(winner);
      const message: any = document.getElementById('message');
      message.innerHTML = `${winner.name} went first (${winner.time})!`;
      message?.classList.toggle('visible', true);
      const reset:any = document.getElementById('reset');
      reset.disable = false;
    }
    if (event.target.classList.contains('reset-button')) {
      event.target.disabled = true;
      store.cars.map(function ({id}:{id:number}) {
        stopDriving(id)
      });
      const message:any = document.getElementById('message');
      message.classList.toggle('visible', false);
      const raceBtn:any = document.getElementById('race');
      raceBtn.disabled = false;
      const reset:any = document.getElementById('reset');
      reset.disable = false;

    }
  });
}
