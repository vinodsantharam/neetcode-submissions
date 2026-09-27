class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];
        const set = new Set(['+', '-', '*', '/']);

        for(const token of tokens) {

            // not an operator
            if(!set.has(token)) {
                stack.push(token)
            }
            else {
                const operand1 = stack.pop();
                const operand2 = stack.pop();

                if(token === '+') {
                    const result = Number(operand1) + Number(operand2);
                    console.log(operand1, operand2)
                    stack.push(result);
                }
                else  if(token === '-') {
                    const result = Number(operand2) - Number(operand1);
                    stack.push(result);
                }
                else  if(token === '*') {
                    const result = Number(operand1) * Number(operand2);
                    stack.push(result);
                }
                else  if(token === '/') {
                    const result = Number(operand2) / Number(operand1);
                    stack.push(Math.trunc(result));
                }
            }
        }


        return stack[0];
    }
}
