export const models = ['Tesla', 'Mersedes', 'BMW', 'Toyots', 'Zhigul', 'Moskvich', 'Opel', 'Aston Martin', 'Porshe'];
export const names = ['S', 'CLK', '7', 'Camry', 'Combi', '9', 'Corsa', 'DB9', 'Cayen'];

export const getRandomName = () => {
  const model = models[Math.floor(Math.random() * models.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  return model + ''+ name; // `${model} ${name}`
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}

export const generateRandomCars = (count = 100) => new Array(count).fill(1).map(_ => ({name:getRandomName(), color: getRandomColor()}))
