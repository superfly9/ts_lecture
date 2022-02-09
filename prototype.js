//js=> 프로토타입 기반 언어
//ref : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p1 = new Person("Meta", 10);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let p2 = new Person2("Google", 20);

// 위의 생성자 함수와 클래스의 인스턴스는 동일, 동작방식이 동일하며 클래스는 생성자를 쓰기 편하게 하기 위함(Syntatic Sugar)

let seoul = { age: 500, country: "Korea" };
let obj = { a: 1 };

obj.__proto__ = seoul;
//obj = {a:1}
console.log(obj.age); //500 => 프로토타입에 정의된 속성에 접근가능하기에
