



const reverseNumber = (arr, start, end) => {
  while (start < end ) {
      while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    console.log(arr);
  }
}
const arr = [3,4,5,6,9,5,6,6,7,8];
const start = 0;
const end = arr.length-1;

reverseNumber(arr, start, end);
