// 컴파일 타임에 호환되지 않는 것들을 찾아내는 역할
export {};

// 1). 변수의 할당
function func1(a:number , b:number | string) {
    const v1:number | string = a;
    const v2:number = b;
    //b가 가질 수 있는 값은 number or string이기에 오류 발생
    //타입 호환성
}
function func2 (a:1|2) {
    const v1 : 1 | 2 |3  = a;
    const v2 : 1 | 7 = a;
    // a가 가질 수 있는 값은 1 또는 2이므로 1만 담을 수 있는 v2에 값을 넣을 수 없다
    //타입 호환성
}

// 2). 인터페이스 할당
interface Person {
    name : string;
    age  : number;
    hobby : string
}

interface Product {
    name : string;
    age  : number;
}

const person : Person =  { name :'Chan', age : 30  , hobby :'Sleeping'};
const person2 : Product = person; 

//Person과 Product는 타입 이름은 같지만 내부 구조는 동일하기에 서로 할당 가능
//이를 structual typing이라 한다.
// interface 할당 가능조건
//1.  Product의 필수 속성(name,age)가 Person에 존재, Product의 속성이 더 많은 건 상관없다
//2.  이름이 같은 각 속성에 대해 타입 역시 동일
// 속성이 많아질수록 해당 interface가 가지는 값에 제약이 생기고, interface가 가지는 타입의 집합이 축소되는 것(그만큼 할당 가능한 요소들이 줄어든다)


interface P1 {
    name : string;
    age : number;
    gender : string;
}

interface P2 {
    name : string;
    age : number | string;
}

const p3 : P1 = {
    name:'half moon',
    age: 5,
    gender : 'netural'
}

const p4 : P2 = p3; // ok
const p5 : P1 = {name:'sd',age:10}; // compile error

/* 
3).함수의 할당
함수타입 A가 함수타입 B로 할당가능하려면   B = A
1. B의 매개변수갯수가 A보다 많아야
2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다
3. A의 리턴값이 B의 리턴값으로 할당 가능해야 한다
*/