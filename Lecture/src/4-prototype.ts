//js의 프로토타입에 속성을 추가하고 싶다면, interface에 그 속성의 이름을 추가해줘야 한다


//이러면 오류 뜸
// function getParams (this:string,index:number):string {
//     return '';
// }

// String.prototype.getParams = getParams;


//정확한 방식
interface String {
    getParams(this:string,index:number) : string
};

function getParams (this:string,index:number):string {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return ''
    }
    return this.split(',')[index];
}
String.prototype.getParams = getParams;

console.log('asas, 1234, ok'.getParams(1)); //1234