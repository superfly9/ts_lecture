"use strict";
//interface Seoul을 가지고 만든 객체
const seoul = {
    country: 'korea',
    feature: 'Good',
    population: '1000m'
};
const me = {
    country: 'korea',
    feature: 'Good',
    hi: 'hello'
};
/* type은 이렇게 나중에 쓴 것을 합쳐주지 XX
type Life = {
    people : string
}
*/
const myLife = 'Good'; //Life의 string type을 따라감
const myLife2 = 29; // Life의 number type을 따라감
const myLife3 = {
    love: 'Most Important',
    money: '적당히',
    health: '꾸준히'
};
//myLife3.money = 'sdsd'  -> money가 readonly기에 바꿀 수 X
myLife3.health = '젊을 때 챙겨야'; // readonly아니기에 바꿀 수 O
