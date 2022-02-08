export {};

class Stack<D> {
    private items: D [] = [];
    push (item:D) {
        this.items.push(item);
    }
    pop () {
        return this.items.pop();
    }
}

const numberStack = new Stack<number>();
numberStack.push(100);
const v1 : number | undefined = numberStack.pop(); //or const v1 = numberStack.pop()

const stringStack = new Stack<string>();
stringStack.push('Seoul Lite');
const v2 = stringStack.pop();