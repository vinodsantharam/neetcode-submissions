class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0;
        }

        const sorted = nums.sort((a, b) => a - b);

        let max = 0;
        let right = 1;
        let count = 0;

        for(let left = 0; left < sorted.length - 1; left++) {
            if(sorted[right] - sorted[left] === 1) {
                count++;
                max = Math.max(max, count);
                right++
            }
            else if(sorted[right] - sorted[left] === 0) {
                right++
            }
            else {
                left = right -1;
                right = right +1;
                count = 0;
            }
        }   

        return max + 1;
    }
}
