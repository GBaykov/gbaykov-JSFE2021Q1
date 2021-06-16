import { getCars } from '../api';
import store from '../store';

export const raceAll = async (promises:[], ids:[]):Promise<{}> => {
  const { success, id, time } = await Promise.race(promises);

  if (!success) {
    const faildIndex = ids.findIndex((i) => i === id);
    const restPromises:any = [...promises.slice(0, faildIndex), ...promises.slice(faildIndex + 1, promises.length)];
    const restIds:any = [...ids.slice(0, faildIndex), ...ids.slice(faildIndex + 1, ids.length)];
    return raceAll(restPromises, restIds);
  }
  return { ...store.cars.find((car:any) => car.id === id), time: +(time / 1000).toFixed(2) };
};

export const race:any = async (action:any) => {
  const promises = store.cars.map(({ id }:{ id:any }) => action(id));
  // const promises = await getCars(1).map(({id}) => action(id));
  // for(let car of promises) {
  //   await action(car)
  // }
  const winner:any = await raceAll(promises, store.cars.map((car:any) => car.id));

  return winner;
};
