import { createCar } from "../api";
import { renderGarage } from "../components/garage-page/garage";
export const carDef = {
  id: 1, name: 'Car', color: 'rgb(43, 231, 115)', isEngineStarted: false,
};
const createFunc = async() => {
  const create = document.getElementById('create');
  create.addEventListener ('submit', async (event) => {
    event.preventDefault();
    alert('sdf')

    // const car = Object.fromEntries(new Map([...event.target].filter(({name}) => !!name).map(({value, name}) => [name, value])));
    await createCar(carDef);
    // document.getElementById('garage')?.innerHTML = renderGarage();

  })
}

