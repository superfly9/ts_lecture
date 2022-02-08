"use strict";
//변수 타입 정의시 Number,String...은 객체를 의미하므로 number,string처럼 소문자로 시작해야
//1.숫자
let firstNumber = 3;
let secondNumber;
secondNumber = 10; //옳은 타입 값으로 재할당,이건 ok
//secondNumber = 'string'(x) 숫자가 들어가야
//2.문자
let str = 'Seoul';
let str2 = firstNumber.toString();
//3. boolean
let bool = true;
bool = false;
//4.Array
//기본 형태
let arr = [1, 2, 3];
let arr1 = [4, 5, 6]; //이 방식은 제네릭에서 많이 사용
arr[3] = 10;
//배열 원소의 타입들을 지정할 때
// 배열의 원소가 string / boolean / number 중 하나면 된다
let arr2 = ['seoul', 10];
//5.튜플
//튜플이라는 것은 배열의 인덱스와 요소의 타입을 정의해준 형식
//배열의 길이와 원소 타입을 정하고 싶을 때
//배열 길이=3 / 첫 째 원소는 숫자, 둘 째는 boolean,셋 째는 string이어야 
let arr3 = [5, false, 'String'];
//원소를 딱 정해서 줄 수도
let arr4 = [2, 'Seoul', 'Lite'];
//let arr5:[2,'Seoul','Lite'] = [2,'Seoul','김말쑥']; <- 'Lite'아닌 다른 값이 들어가서 오류 생김
//6.Object
let obj1 = { a: 10, b: 'seoul' };
let obj2 = { a: 10 }; // ?붙으면 해당값을 사용하지 않을수도 있다는 의미,따라서 b라는 값은 처음에 바로 값을 주지 않고 나중에 값을 줄 수도 있다.
obj1.a = 77;
//객체의 속성값을 변경못하게 하고 싶을때
let obj3 = { a: 2020, b: 'not easy' };
obj3.a = 10000;
//7.function 
//매개변수와 return 값에 대한 타입을 지정해 놓아야
const foo = (a, b) => {
    return a + b;
};
//리턴값이 undefined라면 void를 명시해줘야
const foo2 = (a, b) => {
    console.log(a + b);
};
const fooo2 = (a, b) => {
    return;
};
//함수를 리턴값으로 가질 때
// (c:string)=>string => 함수 foo3의 return 값이 (c:string)을 인수로 받고 string을 return하는 함수임을 명시
const foo3 = (a, b) => {
    return (c) => {
        return a + b;
    };
};
//함수 안의 함수가 다시 함수를 리턴할 때.이걸 보고 있으니 눈이 좀 아픈 것 같다
const foo4 = (a, b) => {
    return (c) => {
        return (d) => {
            return d;
        };
    };
};
//객체의 method
const obj4 = {
    //a라는 method는 (b,c)를 인자로 받고 number를 리턴하는 함수
    a: (b, c) => {
        return c ? c : 100;
    }
};
//강제 형변환(남이 만들어놓은 타입을 내가 원하는 타입으로 바꾸고 싶을 때)
const num = 10;
//방법1-> 변수 선언 후 형변환시 () 안 붙임
const newStr = num; //type:string으로 형변환 (바꾸려는 것과 바꾸고자 하는 것 사이에 어떤 부모-자식 관계도 없으면 as unknown붙여줘야)
const div = document.createElement('div'); //type: HTMLDivElement
const a1 = div; //type:HTMLElement로 형변환 (바꾸려는 대상과 바꾸고자하는 것 사이의 부모-자식 사이면 as를 1번만 붙이면 된다)
//방법2-> 변수 선언없이 형변환시 ()붙여서 실행
const hello = false;
hello.substring(0);
hello.substring(0);
