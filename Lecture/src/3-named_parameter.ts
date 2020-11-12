export {};

//named Parameter 1
// 함수 매개변수 => {객체} : {타입정의 객체} 형식
function getValue({
    name,
    age=28,
    location='Korea'
}:{
    name:string,
    age?:number,
    location?:string
}):string {
    return `My Info:Name is${name} age is ${age},location is ${location}`
}

//named Parameter 2
//인터페이스 객체로 뺴줄 수도, 
interface Params {
    name : string,
    age? : number,
    location?: string
}

function getValue2({
    name,
    age=29,
    location='Yong-in'
}:Params):string {
    return `My Info:Name is${name} age is ${age},location is ${location}`;
}

//not named Parameter

function getValue3 (name:string,age=15,location?:string):string {
    return `My Info:Name is${name} age is ${age},location is ${location}`;
}