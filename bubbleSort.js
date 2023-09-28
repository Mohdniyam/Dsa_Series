function bubbleSort(arr, n){
for( let i=0; i<n-1; i++){
    for( let j=0; j<n-1-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp; 
        }
    }
}
console.log(arr)

}

const arr = [30, 10, 50, 10, 60, 40];
const n = arr.length;

bubbleSort(arr, n)