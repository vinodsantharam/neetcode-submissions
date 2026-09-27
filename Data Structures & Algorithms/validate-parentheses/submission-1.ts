class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const openParanthesis = '(';
        const closeParanthesis = ')';
        const openCurlyBracket = '{';
        const closeCurlyBracket = '}';
        const openBracket = '[';
        const closeBracket = ']';

        const stack = [];

        for(let i = 0; i < s.length; i++) {
            if(s[i] === openParanthesis) {
                stack.push(s[i]);
            }
            else if(s[i] === closeParanthesis) {
                if(stack.at(-1) === openParanthesis) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
            if(s[i] === openCurlyBracket) {
                stack.push(s[i]);
            }
            else if(s[i] === closeCurlyBracket) {
                if(stack.at(-1) === openCurlyBracket) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
             if(s[i] === openBracket) {
                stack.push(s[i]);
            }
            else if(s[i] === closeBracket) {
                if(stack.at(-1) === openBracket) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
        }

        return stack.length ? false: true;
    }
}
