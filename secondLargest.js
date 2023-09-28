// brute force approch

// const secondlargest = (arr, n) => {
//   let largest = arr[n-1];
//   console.log(largest);

//   for(let i = n-1; i >= 0; i--){
//     if(arr[i] != largest){

//        let seclargest = arr[i];
//        console.log(seclargest);
//        break;
//   }
// }
// }
// let arr = [1, 2, 3, 4, 5]
// let n = arr.length;

// secondlargest(arr, n);



const largest = (arr1,n) => {
  let largestElement = arr1[0];
  for (let i = 1; i < arr1.length; i++){
    if(arr1[i] > largestElement){
        largestElement = arr1[i]
    }
} 

 let secondlargestElement =  -1;
 for(let j = 0; j < arr1.length; j++){
    if(arr1[j] > secondlargestElement && arr1[j] != largestElement){
        secondlargestElement = arr1[j];
    }
 }
 console.log(secondlargestElement);
}

const arr1 = [1,2,4,7,7,5]
const n = arr1.length;

largest(arr1, n);