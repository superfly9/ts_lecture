export {};
//add함수 작성하기
//두 매개변수가 모두 문자열이면 문자열 반환
//두 매개변수가 모두 숫자이면 숫자 반환
//두 매개변수를 서로 다른 타입으로 입력하면 오류

//함수 overloading
//함수 리턴 타입을 정의
function add (x:string,y:string):string;
function add (x:number,y:number):number;
function add (x:number|string,y:number|string):number|string  {
    if (typeof x === 'number' && typeof y === 'number') {
        return x+y;
    } else {
        let result = Number(x) + Number(y);
        return result;
    }
}

const v1:number = add(10,20);
const v2:string = add('1','2');
const v3 = add(1,'10');