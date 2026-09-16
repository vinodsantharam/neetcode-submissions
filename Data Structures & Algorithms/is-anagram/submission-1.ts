class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length != t.length) {
            return false;
        }

        const map = new Map();

        for(let i = 0; i < t.length; i++) {
            if(map.has(t[i])){
                map.set(t[i], map.get(t[i]) + 1);
            }
            else {
                map.set(t[i],1);
            }
        }

        console.log(map)

        for(let i = 0; i < s.length; i++) {
            if(map.has(s[i]) && map.get(s[i]) > 0) {
               map.set(s[i], map.get(s[i]) - 1);
            }
            else {
                return false;
            }
            
        }

        return true;
    }
}
