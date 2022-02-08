"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1). 변수의 할당
function func1(a, b) {
    const v1 = a;
    const v2 = b;
    //b가 가질 수 있는 값은 number or string이기에 오류 발생
    //타입 호환성
}
function func2(a) {
    const v1 = a;
    const v2 = a;
    // a가 가질 수 있는 값은 1 또는 2이므로 1만 담을 수 있는 v2에 값을 넣을 수 없다
    //타입 호환성
}
const person = { name: 'Chan', age: 30, hobby: 'Sleeping' };
const person2 = person;
const p3 = {
    name: 'half moon',
    age: 5,
    gender: 'netural'
};
const p4 = p3; // ok
const p5 = { name: 'sd', age: 10 }; // compile error
/*
3).함수의 할당
함수타입 A가 함수타입 B로 할당가능하려면   B = A
1. B의 매개변수갯수가 A보다 많아야
2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다
3. A의 리턴값이 B의 리턴값으로 할당 가능해야 한다
*/ 
