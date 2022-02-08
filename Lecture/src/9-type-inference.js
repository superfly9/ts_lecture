"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//정적 타입언어의 단점 : 타입을 일일히 정의해주는 데 시간이 걸린다
//이를 해결하기 위해 타입 추론을 자동으로 도와줌
//1. let으로 변수 선언시 할당된 값의 타입이 정의됨
let a = 123; // number
let b = 'ES2020'; // string
//2. const는 변수 재할당이 안되는 엄격한 선언이기에, 선언한 값의 타입(number/string..)아닌 값 자체가 타입이 됨
const aa = 123; // typeof aa === 123 , not number
const bb = 'ES2020'; // typeof bb === 'ES2020', not string
let v1 = 'good awesome'; // Error : bb를 타입으로 할당했기에 'ES2020'값만 쓸 수 있다
let v2 = 'ES2020'; // ok
let v3 = bb; // ok  
// v2,v3의 차이는 타입 선언을 어떻게 했냐의 차이, 즉 어떤 타입을 선언했느냐 따라 변수 할당에서 에러가 생길수도 아닐수도
//3. array
const arr1 = [10, 20, 30]; // number []
arr1.push('Seoul Lite'); // error : number []에 string타입 원소 넣을 수 없기에
const arr2 = [10, 20, 30]; // number|string []
arr2.push('Awesome'); //ok
const noname = { name: 'nop', location: 'dont know', history: 0 };
const korea = { name: 'Korea', location: 'center of the world', history: 5000, awesome: true };
const japan = { name: '?', location: '?', history: 0, fucking: true };
// 배열의 원소가 각각 다른 타입 가질 때  1. 타입을 하나로 통합하는 과정 거침 2. 통합 가능한건 제거 그렇지 않으면 유니온으로 타입 명시
const newArr = [korea, japan];
//  type : (Korea | Japan) [] , 서로 할당 가능하지 않기에 유니온으로 타입 명시
const newArr1 = [noname, korea, japan];
// type : Country [] ,타입을 하나로 통합하는 과정 거침-더 작은 타입범위인 Korea,Japan이 Country에 할당가능하기에 타입은 Country
//5. 함수 타입 추론 (매개변수 / 리턴값)
function foo1(a = 'seoul', b) {
    return `${a} ${b}`; // string
} // foo1 (a: string | undefined, b : number) : string
foo1(undefined, 50); // 10은 number이기에 들어갈수 X
const result1 = foo1('seoul Lite', 500); //return값 타입 다르기에 오류
function foo3(a = 'seoul', b) {
    return `${a} : ${b}`;
}
// 이렇게 매개변수 타입 명시적으로 나타내주면 아래의 함수 실행시 에러 안남
foo3(10, 50);
// 리턴값 여러개 일때 알아서 잘 추론해 줌
function foo2(value) {
    if (value < 10) {
        return value;
    }
    else if (value > 5) {
        return [value, value * 2];
    }
    else {
        return `value is bigger than ${value}`;
    }
}
// function foo2 (value : number) : string | number | number []
