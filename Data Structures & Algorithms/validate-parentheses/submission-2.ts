class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

      isValid(s: string): boolean {
        const map = new Map();
        map.set('{', '}');
        map.set('[', ']');
        map.set('(', ')');

        const stack = [];

        for(let i = 0; i < s.length; i++) {
           if(map.has(s[i])) {
            stack.push(s[i]);
           }
           else {
             const last = stack.pop();
             if(map.get(last) !== s[i]) {
                return false;
             }
           }
        }

        return stack.length ? false: true;
    }
}
