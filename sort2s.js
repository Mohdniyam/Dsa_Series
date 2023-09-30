// Sort an array of 0s, 1s and 2s | Dutch National Flag problem

const sort = (arr) => {
    let mid = 0;
    let low = 0;
    let high = arr.length - 1;
    let temp = 0;
  while (mid <= high) {
    if (arr[mid] === 0) {
      temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      temp = arr[high];
      arr[high] = arr[mid];
      arr[mid] = temp;
      high--;
    }
  }
  console.log(arr);
};
const arr = [0, 1, 2, 0, 1, 2];

sort(arr);
