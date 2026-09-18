class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {
            const value = nums[i];
            if(map.has(value)) {
                map.set(value, map.get(value) +1)
            }
            else {
                map.set(value, 1);
            }
        }

        const sortedArray = [...map.entries()].sort((a, b) => a[1] - b[1]);
        console.log(sortedArray);
        const result = [];

        for(let i = sortedArray.length; k > 0; k--) {
            result.push(sortedArray[i-k][0]);
        }

        return result;
    }
}
