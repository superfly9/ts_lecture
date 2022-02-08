"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(100);
const v1 = numberStack.pop(); //or const v1 = numberStack.pop()
const stringStack = new Stack();
stringStack.push('Seoul Lite');
const v2 = stringStack.pop();
