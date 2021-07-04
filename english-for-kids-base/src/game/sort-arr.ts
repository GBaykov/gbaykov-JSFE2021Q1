export const sortArr = (arr:NodeListOf<HTMLAudioElement>):HTMLAudioElement[] => {
  const newArr = [];
  newArr.push(arr[2]);
  newArr.push(arr[0]);
  newArr.push(arr[4]);
  newArr.push(arr[7]);
  newArr.push(arr[5]);
  newArr.push(arr[3]);
  newArr.push(arr[1]);
  newArr.push(arr[6]);
  return newArr;
}

// export function shuffle(e) {
//   for (let c = e.length - 1; c > 0; c -= 1) {
//     const b = Math.floor(Math.random() * (c + 1));
//     const a = e[c];
//     e[c] = e[b];
//     e[b] = a;
//   }
//   return e;
// }
