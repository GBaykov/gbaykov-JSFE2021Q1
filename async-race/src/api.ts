export const base:string = 'http://localhost:8080/';

export const garage:string = `${base}/garage`;
export const engine:string = `${base}/engine`;
export const winners:string = `${base}/winners`;

export const getCars = async (page:number, limit:number = 7) => {
  const respons = await fetch(`${garage}?_page={${page}}&_limit={${limit}}`);

  return {
    items: await respons.json,
    count: respons.headers.get('X-Total-Count'),
  };
}

export const getCar = async (id:number) => {await fetch(`${garage}/${id}`)}

export const createCar = async (body:object) => (await fetch( garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();

export const deleteCar = async (id:number) => (await fetch(`${garage}/${id}`, { method: 'DELETE'})).json();

export const updateCar = async (id:number, body:object) => ( await fetch(`${garage}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();

export const startEngine = async (id:number) => (await fetch(`${engine}?id=${id}&status=started`)).json();

export const stopEngine = async (id:number) => (await fetch(`${engine}?id=${id}&status=stopped`)).json();

export const getSortOrder = (sort:string, order:string) => {
  if (sort && order) return `&_sort=${sort}$_order=${order}`
  return '';
}

export const getWinners = async ({page, limit = 10, sort, order}: { page: string; limit: number, sort:string, order:string}) => {
  const response = await fetch(`${winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items = await response.json(); //:object[]

  return {
    items: await Promise.all(items.map(async winner => ({...winner, car: await getCar(winner.id)}))),
    count: response.headers.get('X-Total-Count'),
  };
}

export  const getWinner = async (id:number) => (await fetch(`${winners}/${id}`)).json();

export  const getWinnerStatus = async (id:number) => (await fetch(`${winners}/${id}`)).status;

export  const deleteWinner = async (id:number) => (await fetch(`${winners}/${id}`, {method: 'DELETE'})).json();

export const createWinner = async (body:object) => (await fetch( winners, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();

export const updateWinner = async (id:number, body: object) => (await fetch(`${winners}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();

export const saveWinner = async (id:number, body: object) => {
  const winnerStarus = await getWinnerStatus(id);

  if (winnerStarus === 404) {
    await createWinner({
      id,
      wins: String,
      time: Number
})
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
}
