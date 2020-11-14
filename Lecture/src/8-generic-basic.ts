// generic : 타입을 동적으로 결정할 수 있게 해주는 타입, 같은 규칙을 여러번 적용가능 => 타입의 중복 작성 줄여줄 수
// <>로 사용

// 배열 원소 제거시
// 뒤의 원소 제거 : [].pop === undefined ,['seoul','lite','awesome'].pop === 'awesome'
// 앞의 원소 제거 : [].shift === undefind, ['seoul','lite','awesome'].shift === 'seoul'

export {};
//Before Generic
//1. function
function makeNumberArr (defaultValue : number , length : number) {
    const arr = []; //any [], 이렇게 놔두지 말고 타입을 명시적으로 써주자 const arr: number[] = [];
    for (let i = 0 ; i < length; i++ ) {
        arr.push(defaultValue);
    }
    return arr; // number []
}

function makeStringArray (defaultValue : string, length : number) {
    const arr:string [] = [];
    for (let i = 0 ; i < length; i++ ) {
        arr.push(defaultValue);
    }
    return arr; // string []
}

const arr1 = makeNumberArr(5,10);
const arr2 = makeStringArray('Seoul Lite',10);

//2. function refactoring(overloading)

function makeArray (defaultValue: number, length: number): number [];
function makeArray (defaultValue: string, length: number): string [];
function makeArray (
    defaultValue:number | string,
    length: number
): (number | string) [] {
    const arr:Array< number | string> = [];
    for (let i =0; i <length; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
const arr3 = makeArray(7,5);
const arr4 = makeArray('Dont give up',5);
// 단점 : 매개변수 타입이 추가될 때마다 오버로딩해줘야 함 -> 낭비,중복

//3. use generic

function useGenereic<T> (defaultValue:T, length:number): T[] {
    const arr:T [] = [];
    for (let i = 0; i < length; i++) {
        arr.push(defaultValue);
    }
    return arr;
}

// 타입을 명시적으로 안써도 추론 
const genArr1 = useGenereic('GGGGG',5); // string []
const genArr2 = useGenereic(29,6);  // number []
// 명시적으로 타입 표시
const genArr3 = useGenereic<string>('Hi Generic', 5); // string []
const genArr4 = useGenereic<number>(35,6); // number []
const genArr5 = useGenereic<number | boolean >(true,6); // number|boolean [],여러 타입을 넣어줄수도 있다