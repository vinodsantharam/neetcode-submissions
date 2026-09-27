class MinStack {
    _stack;
    _minStack;
    constructor() {
        this._stack = [];
        this._minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this._stack.push(val);
        if(this._minStack.length) {
            this._minStack.push(Math.min(this._minStack.at(-1), val));
        }
        else {
            this._minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
       this._stack.pop();
       this._minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this._stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this._minStack.at(-1);
    }
}
