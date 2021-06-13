import {
  getCars, getCarsCount, getWinners
} from './api';

//const { items: cars, count: carsCount } = await getCars(1);
let cars = async() => {
  await getCars(1);
}
let carsCount = async() => {
  await getCarsCount(1)
}
//let carsCount = await getCarsCount(1)


const { items: winners, count: winnersCount } = await getWinners({
  page: 1, limit: 10, sort: 'id', order: 'ASC',
});

export default {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winners,
  winnersCount,
  animation: {},
  view: 'garage',
  sortBy: null,
  sortOrder: null,
};
