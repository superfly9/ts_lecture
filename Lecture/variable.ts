//변수 타입 정의시 Number,String...은 객체를 의미하므로 number,string처럼 소문자로 시작해야
//1.숫자
let firstNumber: number =3;
let secondNumber: number;
secondNumber = 10; //이건 ok
//secondNumber = 'string'(x) 숫자가 들어가야

//2.문자
let str: string = 'Seoul';
let str2: string = firstNumber.toString();

//3. boolean
let bool: boolean = true;
bool = false

//4.Array
//기본 형태
let arr: number[] = [1,2,3];
let arr1:Array<number>=[4,5,6]; //이 방식은 제네릭에서 많이 사용
arr[3] = 10;
//배열 원소의 타입들을 지정할 때
// 배열의 원소가 string / boolean / number 중 하나면 된다
let arr2:(string|boolean|number) [] = ['seoul',10];
//5.튜플
//튜플이라는 것은 배열의 인덱스와 요소의 타입을 정의해준 형식
//배열의 길이와 원소 타입을 정하고 싶을 때
//배열 길이=3 / 첫 째 원소는 숫자, 둘 째는 boolean,셋 째는 string이어야 
let arr3:[number,boolean,string] = [5,false,'String']
//원소를 딱 정해서 줄 수도
let arr4:[2,'Seoul','Lite'] = [2,'Seoul','Lite']; 
//let arr5:[2,'Seoul','Lite'] = [2,'Seoul','김말쑥']; <- 'Lite'아닌 다른 값이 들어가서 오류 생김

//6.Object
let obj1:{a:number,b:string} = {a:10,b:'seoul'};
let obj2:{a:number,b?:string} = {a:10}; // ?붙으면 해당값을 사용하지 않을수도 있다는 의미,따라서 b라는 값은 처음에 바로 값을 주지 않고 나중에 값을 줄 수도 있다.
obj1.a = 77;

//객체의 속성값을 변경못하게 하고 싶을때
let obj3 :{a:number,b:string} = {a:2020,b:'not easy'} as const;
obj3.a = 10000

//7.function 
//매개변수와 return 값에 대한 타입을 지정해 놓아야
const foo = (a:number,b:number): number =>{
    return a+b
}

//리턴값이 없다면(undefined) void를 명시해줘야
const foo2 = (a:number,b:number):void =>{
    console.log(a+b)
}