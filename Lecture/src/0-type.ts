export {};

type City = number | string;
let seoul: City;
seoul = "한국의 수도";
seoul = 1000;

let v1 = (1 | 3 | 5) & (3 | 5 | 7); // &(intersection)는 양쪽의 교집합의 원소를 선택 , | (union)
v1 = 3;
v1 = 1; //error

interface Person1 {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
};
let chan: Person2 = { name: "Chan", age: 5 }; // => 에디터가 타입 추론 더 명확히 해줌
// let chan: Person1 = { name: "Chan", age: 5 } => 에디터의 타입 추론이 타입에 비해 명확하지 않음

// 인터페이스 => 확장가능 , 타입 => 확장이 안 된다
// 따라서 인터페이스의 사용을 추천
