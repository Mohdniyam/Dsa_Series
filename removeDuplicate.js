const removeDupicate = function(arr, n) {
    let i =0;
    for(var j = 1; j < n; j++){
       if(arr[j] != arr[i]){
         arr[i+1] = arr[j];
         i++;
       }
    }
    return i+1 ;

}

const arr = [1,1,2,2,2,3,3]
const n = arr.length;

console.log(removeDupicate(arr, n));

