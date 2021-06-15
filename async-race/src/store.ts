import {
  getCars, getCarsCount, getWinners, getWinnersCount
} from './api';

//const { items: cars, count: carsCount } = await getCars(1);
let cars:any = async() => {
  await getCars(1);
}
let carsCount:any = async() => {
  await getCarsCount(1)
}
//let carsCount = await getCarsCount(1)

// let winners = async() => {
//   await getWinners({page: 1, limit: 10, sort: 'id', order: 'ASC'});
// }
// let winnersCount = async() => {
//   await getWinnersCount({page: 1, limit: 10, sort: 'id', order: 'ASC'});
// }

const { items: winners, count: winnersCount }:any = await getWinners({
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
