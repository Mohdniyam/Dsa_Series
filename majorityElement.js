// Boyer-Moore Majority Voting Algorithm

const majorityE = (nums) => {
     let cnt = 0;
     let el;
     for(let i = 0; i < nums.length; i++) {
        if(cnt === 0){
            cnt++;
            el = nums[i];
        }
        else if(nums[i]=== el){
            cnt++;
        }
        else{
            cnt--;
        }
     }

     let cnt1 = 0;
     for(let i = 0; i < nums.length; i++){
        if(nums[i] === el){
            cnt1++;
     }
    }
     if(cnt1 > nums.length/2){
        return el;
     }
     return -1;    
}
const nums = [2,2,1,3,1,1,3,1,1]
majorityElement(nums);
