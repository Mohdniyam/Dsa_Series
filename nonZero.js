function nonZero(arr,n){
    let j = -1;
    let temp = 0;
    for(let i= 0; i < arr.length; i++){
        if(arr[i] === 0){
            j=i;
            temp = arr[i];
            break;
        }
    }
    
    

    for(let i=j+1; i < arr.length; i++){
        if(arr[i] != 0){
            arr[i] = temp;
            arr[j] = arr[i];
            j++;
            
        }
    }
    console.log(arr);
}

const arr = [1,0,2,3,2,0,0,4,5,1];
const n = arr.length;

nonZero(arr, n)