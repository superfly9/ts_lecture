"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//잘못된 사용
//this 쓰고 싶다면 함수 매개변수 첫번째 값으로 전달
function getParams(index) {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}
//올바른 사용
//this를 전달했기에 2번째 인자 index부터 매개변수로 사용
function getParams2(index) {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return '';
    }
    return params[index];
}
