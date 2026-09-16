class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let left = 0;
        let right = 1;

        while(left < nums.length - 1) {
            if(nums[left] + nums[right] === target) {
                return [left, right]
            }
            else if(right === nums.length) {
                left++;
                right = left + 1;
            }   
            else {
                right++;
            }
            
        }

        return [0,1];
    }
}
