import { getCars, getCarsCount } from '../../api';
import store from '../../store';

export const updateStateGarage = async () => {
  const items:any = await getCars(store.carsPage);
  const counts:any = await getCarsCount(store.carsPage);
  store.cars = items;
  store.carsCount = counts;

    if(store.carsPage * 7 < store.carsCount) {
      const next:any =document.getElementById('next')
      next.disabled = false;

   } else {
    const next:any =document.getElementById('next')
      next.disabled = true;

   }
   if(store.carsPage > 1) {
     const prev:any = document.getElementById('prev')
     prev.disabled = false;
 } else {
  const prev:any = document.getElementById('prev')
     prev.disabled = true;
 }
};
