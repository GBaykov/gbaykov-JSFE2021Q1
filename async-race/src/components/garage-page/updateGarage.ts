import { getCars, getCarsCount } from '../../api';
import store from '../../store';

export const updateStateGarage = async () => {
  const items:any = await getCars(store.carsPage);
  const counts:any = await getCarsCount(store.carsPage);
  store.cars = items;
  store.carsCount = counts;

    if(store.carsPage * 7 < store.carsCount) {
      document.getElementById('next').disabled = false;

   } else {
    document.getElementById('next').disabled = true;

   }
   if(store.carsPage > 1) {
    document.getElementById('prev').disabled = false;
 } else {
  document.getElementById('next').disabled = true;
 }
};
