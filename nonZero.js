function nonZero(arr, n, temp){
    for(let i=0; i<n; i++){
        if(arr[i] != 0)
        temp.push(arr[i])
    }
    for(let i=0; i<temp.length; i++){
        arr[i] = temp[i]
    }

    for(let i=7;i<n; i++){
        arr[i] = 0;
    }
    return arr;
}

const arr = [1]
const n = arr.length;
const temp = [];

const newArr = nonZero(arr, n, temp)

console.log(newArr)

// var moveZeroes = function (nums) {

//  const n = nums.length;
//  let j = -1;
//   for (let i = 0; i < n; i++) {
//     if (nums[i] === 0) {
//       j = i;
//       break;
//     }
//   }

//   for (let i = j + 1; i < n; i++) {
//     if (nums[i] != 0) {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//       j++;
//     }
//   }
//   return nums;
// };

// const nums = [1];

// const moveArr = moveZeroes(nums);

// console.log(moveArr);
