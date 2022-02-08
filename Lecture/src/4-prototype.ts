//js의 프로토타입에 속성을 추가하고 싶다면, interface에 그 속성의 이름을 추가해줘야 한다


//이러면 오류 뜸
// function getParams (this:string,index:number):string {
//     return '';
// }

// String.prototype.getParams = getParams;


//정확한 방식
interface String {
    //1. String객체에 원하는 메서드 속성 추가
    getParams(this:string,index:number) : string
};

// 2. 메서드 작성
function getParams (this:string,index:number):string {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return ''
    }
    return this.split(',')[index];
}
//3. 실제 할당 => 이제 사용
String.prototype.getParams = getParams;

console.log('asas, 1234, ok'.getParams(1)); //1234


function doubleNumber (this:number,number:number) : number {
    return number * 2;
}
Number.prototype.doubleNumber = doubleNumber;
interface Number {
    doubleNumber(this:number,number:number) : number
}