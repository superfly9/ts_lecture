"use strict";
let numberOne = Math.ceil(Math.random() * 9);
let numberTwo = Math.ceil(Math.random() * 9);
let result = numberOne * numberTwo;
let body = document.body;
let p = document.createElement('p');
p.innerHTML = `${numberOne} * ${numberTwo}?`;
body.append(p);
let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'number';
let button = document.createElement('button');
button.innerHTML = '제출';
let resultDiv = document.createElement('div');
body.append(form);
form.append(input);
form.append(button);
body.append(resultDiv);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Number(input.value) === result) {
        resultDiv.textContent = '딩동댕';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        p.innerHTML = `${numberOne} * ${numberTwo}?`;
        result = numberOne * numberTwo;
    }
    else {
        resultDiv.textContent = '땡';
    }
    input.value = '';
    input.focus();
});
