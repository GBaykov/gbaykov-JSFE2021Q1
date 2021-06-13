import { getCars, getCarsCount } from '../../api';
import store from '../../store';

export const updateStateGarage = async () => {
  const items = await getCars(store.carsPage);
  const counts = await getCarsCount(store.carsPage);
  store.cars = items;
  //store.carsCount = counts;
  //  if(store.carsPage * 7 < store.carsCount) {

  //  }
};
