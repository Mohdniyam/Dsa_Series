const isSorted = (arr, n) => {
 for (let i = 1; i < n; i++){
    if(arr[i] >= arr[i - 1]){

    }
    else{
        arr[i-1] = arr[i];
    }
 }
 return arr;
}
 const arr = [4, 2, 4, 2, 5]
 const n = arr.length;

console.log(isSorted(arr, n));