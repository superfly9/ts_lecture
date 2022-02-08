export {};

//1.객체 정의에 사용 ->타입 이름 (대문자 시작)
// 속성값? : optional key
// readonly : 객체 생성시 값 할당하는 것 외에는 수정 불가능
// 타입 호환성 : 속성값 명시된 게 작을수록 더 큰 범위의 타입을 가짐
interface Lecture {
  category: string;
  price: number;
}

interface Person {
  readonly name: string;
  age?: number;
  //2. ? optional key값 주면 해당하는 value타입에 undefined가 추가된다
  // age? : number ===> age? : number | undefined
  [key: string]: string | number | undefined;
  //3.인덱스 타입으로 속성 정의 []안에 이름은 어떤 값이건 넣을 수 있다
}

const p2 = {
  name: "Seoul",
  birthday: "long time ago",
};

const p3: Person = p2; //p3(Person)이 p2보다 더 큰 타입 범위 갖기에 할당 가능

//4.js에서 속성값이 숫자면 내부에서 문자로 변환해서 사용,
//따라서 속성값이 숫자인 2020의 값이 속성값이 '2020'인 녀석에게 타입으로 할당가능한지 확인해야
interface YearPrice {
  [years: number]: number;
  [year: string]: number | string;
  //[year:string] : string이면 [years:number] : number에서 number가 string에 할당가능하지 않기에 오류
}

const yearPrice: YearPrice = {};
yearPrice[2020] = "2020"; // error
yearPrice["2020"] = "2020"; // ok

//5.함수 타입 정의 가능
interface GetText {
  (name: string, age: number): string;
}
//또는 타입을 이용가능
type GetText2 = (name: string, age: number) => string;

const getText: GetText = function (name, age) {
  return `name is ${name},age is ${age}`;
};

const getTextArrow = (name: string, age: number): string => {
  return `name is ${name},age is ${age}`;
};

// 6.interface를 상속받아 클래스 구현 가능
interface Product {
  name: string;
  price: number;
  isCheaperThan(price: number): boolean;
}

// extends아닌 implements이다
class SomeProduct implements Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  isCheaperThan(price: number) {
    return this.price < price;
  }
}

//7. interface를 확장가능(extends이용)
interface Me {
  name: string;
  age: number;
}
interface Programmer {
  favoriteProgram: string;
}
// 하나의 인터페이스가 여러개의 인터페이스 상속 가능
interface Iam extends Me, Programmer {
  isLiveInKorea: boolean;
}
// Iam { name, age ,favoriteProgram, isLivenInKorea }다 가지고 있다

//8. Intersection Types : 타입들을 결합시켜준다(확장)
// -> 교차연산자(&) 사용으로 타입범위 재사용 및 확장가능

type PP = Me & Programmer; // Me + Programmer의 속성값을 정확히 다 가지고 있어여
const pp: PP = {
  name: "g",
  age: 10,
  favoriteProgram: "js",
};

// extends 같은 종류끼리 상속할 때(class - class / interface - interface)
// implements 다른 종류끼리 상속할 때 (class A implements B(B is interface) )

// dictionary Pattern
interface StringRegexDictionary {
  [key: string]: RegExp;
}
let obj = { cssFile: /\.css$/, jsFile: /\.js$/ };
// 자동적으로 키 값이 string으로 추론됨
Object.keys(obj).forEach((v) => {
  console.log(v);
});
