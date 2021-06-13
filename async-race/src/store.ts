import { getCars, getWinner, getWinners, getWinnerStatus } from "./api";

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners({page:1,limit:10,sort:'id',order:'ASC'});

export default {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage:1,
  winners,
  winnersCount,
  animation: {},
  view: 'garage',
  sortBy:null,
  sortOrder: null,
}
