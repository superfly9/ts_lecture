"use strict";
// generic : 타입을 동적으로 결정할 수 있게 해주는 타입, 같은 규칙을 여러번 적용가능 => 타입의 중복 작성 줄여줄 수
// <>로 사용
Object.defineProperty(exports, "__esModule", { value: true });
//Before Generic
//1. function
function makeNumberArr(defaultValue, length) {
    const arr = []; //any [], 이렇게 놔두지 말고 타입을 명시적으로 써주자 const arr: number[] = [];
    for (let i = 0; i < length; i++) {
        arr.push(defaultValue);
    }
    return arr; // number []
}
function makeStringArray(defaultValue, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(defaultValue);
    }
    return arr; // string []
}
const arr1 = makeNumberArr(5, 10);
const arr2 = makeStringArray('Seoul Lite', 10);
function makeArray(defaultValue, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
const arr3 = makeArray(7, 5);
const arr4 = makeArray('Dont give up', 5);
// 단점 : 매개변수 타입이 추가될 때마다 오버로딩해줘야 함 -> 낭비,중복
//3. use generic
function useGenereic(defaultValue, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
// 타입을 명시적으로 안써도 추론 
const genArr1 = useGenereic('GGGGG', 5); // string []
const genArr2 = useGenereic(29, 6); // number []
// 명시적으로 타입 표시
const genArr3 = useGenereic('Hi Generic', 5); // string []
const genArr4 = useGenereic(35, 6); // number []
const genArr5 = useGenereic(true, 6); // number|boolean [],여러 타입을 넣어줄수도 있다
