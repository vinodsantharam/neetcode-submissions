class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = [];

        const data = position.map((x,i) => [x,speed[i]]).sort((a,b) => a[0] - b[0]);
        const last = data.pop();
        const time = (target - last[0]) / last[1];
        stack.push(time);

        for(let i = data.length -1; i >= 0; i --) {
            const time = (target - data[i][0]) / data[i][1];

            if(time > stack[stack.length -1]) {
                stack.push(time);
            }
        }


        return stack.length;
    }
}
