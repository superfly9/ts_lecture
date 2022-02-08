"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p2 = {
    name: "Seoul",
    birthday: "long time ago",
};
const p3 = p2; //p3(Person)이 p2보다 더 큰 타입 범위 갖기에 할당 가능
const yearPrice = {};
yearPrice[2020] = "2020"; // error
yearPrice["2020"] = "2020"; // ok
const getText = function (name, age) {
    return `name is ${name},age is ${age}`;
};
const getTextArrow = (name, age) => {
    return `name is ${name},age is ${age}`;
};
// extends아닌 implements이다
class SomeProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    isCheaperThan(price) {
        return this.price < price;
    }
}
const pp = {
    name: "g",
    age: 10,
    favoriteProgram: "js",
};
let obj = { cssFile: /\.css$/, jsFile: /\.js$/ };
// 자동적으로 키 값이 string으로 추론됨
Object.keys(obj).forEach((v) => {
    console.log(v);
});
