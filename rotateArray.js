var rotate = function(nums, k) {
    let tmp = 0;
    const leng = nums.length;
    k = k % leng;
    for (let i = 0; i < k; i++) {
       tmp = nums.pop();
       nums.unshift(tmp);
    }
    console.log(nums)
};

const nums = [1,2,3,4,5,6,7];
const k = 3;
const n = nums.length;
rotate(nums, k)