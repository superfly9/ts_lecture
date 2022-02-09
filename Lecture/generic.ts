//제너릭 => 타입을 함수 파라미터로 받게 함
//왜 제너릭 사용?

/*다음과 같이역할이 비슷하나 매개변수의 타입이 다른 두 함수가 존재한다.
  같은 함수를 2번 선언했으므로 Duplicate발생 => 그렇다면 매개변수의 타입을 바꿔볼까?
*/
function add1(a: number, b: number): number {
  return a + b;
}
function add1(a: string, b: string): string {
  return a + b;
}
add1(10, 5);
add1("Seoul", "Lite");

//그렇게 해서 나온 결과이지만 내가 원하는 대로 작동X=>(숫자,문자)매개변수를 정상으로 인식하기에
function add(a: number | string, b: number | string): number | string {
  return a + b;
}
//내가 원하는 건 숫자만 혹은 문자만 매개변수로 들어가는 것
add(1, 10);
add("Seoul", "Lite");
// 내가 원하는 상황이 아니지만 add함수에서 문제없이 실행됨
add(1, "abc");

//인터페이스로 함수 표현이 가능
interface Example {
  add: (a: number, b: number) => number;
}
const ex: Example = {
  add: (a, b) => {
    return a + b;
  },
};

//제너릭
interface obj<T> {
  add: (a: T, b: T) => T;
}
const a: obj<number> = {
  //<number>가 T역할을 하기에 매개변수,리턴값이 number를 자료형으로 갖는다
  add: (a, b) => a + b,
};
a.add(10, 5); // 결과:15, 매개변수가 다 <number>이기에 잘 실행된다
//a.add('Seoul','Lite') => 오류 발생,string매개변수가 <number>로 선언한 매개변수에 들어갈 수 X

const b: obj<string> = {
  add: (a, b) => a + b,
};
b.add("Seoul", "Lite"); // 결과:Seoul Lite, 매개변수가 다 <string>이기에 잘 실행된다
// b.add(10,5) => 오류 발생,number매개변수가 <string>으로 선언한 매개변수에 들어갈 수 없기에

// 1. Arrow function
// const logText<T> = (val:T):T=>val 이렇게 주면 안됨
const logText = <T extends {}>(val: T): T => val;
logText<number>(50);
// 2. function declartion
function logText2<T>(val: T): T {
  return val;
}
logText2<string>("Korea");
