export {};

type City = number | string;
let seoul : City;
seoul = '한국의 수도';
seoul = 1000;

let v1 = (1|3|5) & (3|5|7); // &(intersection)는 양쪽의 교집합의 원소를 선택 , | (union)
v1 = 3;  
v1= 1; //error