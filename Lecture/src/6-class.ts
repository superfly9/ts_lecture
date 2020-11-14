export {}
// 1. 클래스 생성 및 상속
class Person {
    name : string;
    constructor(name:string) {
        this.name = name;
    }
    sayHello () {
        console.log('hi Persone');
    }
}

class Programmer extends Person {
    fixBug () {
        console.log('Kill Bug Ok')
    }
}
const programmer = new Programmer('chan');
programmer.sayHello();
programmer.fixBug();


// 1.5  자식 constructor구성시 super()호출 => 부모의 constructor()가 실행됨
class People extends Person {
    constructor (name:string) {
        super(name);
    }
    fixBug () {
        console.log('Kill Bug Ok')
    }
}

// 2. 변수의 범위 설정 ( public(default)/ protected / private )
// protected => 상속받은 쪽에서 접근 가능 / new로 생성된 외부 객체에서도 접근 불가
// private   => 상속받은 쪽/외부객체 모두에서 접근 불가, #키워드 붙여도 private 변수됨(최근 js에서 채택, ex) person.#name)
// ts에서는 안헷갈리게 private쓰자

//3. static => 인스턴스 아닌 클래스 통해 접근해야
class Seoul {
  //static keyword => constructor안에서 정의하면 오류뜬다
  // contstructor는 객체 인스턴스 통해 접근해야 하고, static은 클래스를 통해 접근해야 하기에
  static location='Korea';
  // constructor에 범위 설정 keyword / readonly사용시 자동으로 클래스의 멤버 변수로 사용 가능
  constructor(public name:string,readonly age:number) {}
  static getInfo (location:string) {
      return `Seoul is in ${Seoul.location}`
  }
}

const city = new Seoul('seoul Lite',500);
console.log('city class:',city); // Seoul {name : 'Seoul Lite' , age : 500 }