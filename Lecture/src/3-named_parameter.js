"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//named Parameter 1
// 함수 매개변수 => {객체} : {타입정의 객체} 형식
function getValue({ name, age = 28, location = 'Korea' }) {
    return `My Info:Name is${name} age is ${age},location is ${location}`;
}
function getValue2({ name, age = 29, location = 'Yong-in' }) {
    return `My Info:Name is${name} age is ${age},location is ${location}`;
}
//not named Parameter
function getValue3(name, age = 15, location) {
    return `My Info:Name is${name} age is ${age},location is ${location}`;
}
