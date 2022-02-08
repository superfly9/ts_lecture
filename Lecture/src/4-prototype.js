"use strict";
//js의 프로토타입에 속성을 추가하고 싶다면, interface에 그 속성의 이름을 추가해줘야 한다
;
// 2. 메서드 작성
function getParams(index) {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}
//3. 실제 할당 => 이제 사용
String.prototype.getParams = getParams;
console.log('asas, 1234, ok'.getParams(1)); //1234
function doubleNumber(number) {
    return number * 2;
}
Number.prototype.doubleNumber = doubleNumber;
