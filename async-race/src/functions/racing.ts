import { getCars } from "../api";
import store from "../store";

export const raceAll = async (promises:[], ids:[]):Promise<{}>=> {
  const { success, id, time } = await Promise.race(promises);

  if (!success) {
    const faildIndex = ids.findIndex(i => i === id);
    const restPromises = [...promises.slice(0, faildIndex), ...promises.slice(faildIndex + 1, promises.length)];
    const restIds = [...ids.slice(0, faildIndex), ...ids.slice(faildIndex + 1, ids.length)];
    return raceAll(restPromises, restIds);
  }
  return { ...store.cars.find(car => car.id === id), time: +(time/1000).toFixed(2)};
}

export const race = async (action:Function) => {
  const promises = store.cars.map(({id}) => action(id));
   //const promises = await getCars(1).map(({id}) => action(id));
  // for(let car of promises) {
  //   await action(car)
  // }
  const winner = await raceAll(promises, store.cars.map(car => car.id))

  return winner;
}

