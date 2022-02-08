"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        let result = Number(x) + Number(y);
        return result;
    }
}
const v1 = add(10, 20);
const v2 = add('1', '2');
const v3 = add(1, '10');
