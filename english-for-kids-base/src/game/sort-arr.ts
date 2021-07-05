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
};
