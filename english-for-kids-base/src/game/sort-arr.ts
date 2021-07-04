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

// export function sort(e:any) {
//   const newArr = [];
//   for(let i of e) {
//     newArr.push(e[i])
//   }
//   for (let c = newArr.length - 1; c > 0; c -= 1) {
//     const b = Math.floor(Math.random() * (c + 1));
//     const a:any = newArr[c];
//     newArr[c] = newArr[b];
//     newArr[b] = a;
//   }
//   return newArr;
// }
