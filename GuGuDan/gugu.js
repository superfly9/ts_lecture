var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var body = document.body;
var p = document.createElement('p');
p.innerHTML = numberOne + " * " + numberTwo + "?";
body.append(p);
var form = document.createElement('form');
var input = document.createElement('input');
input.type = 'number';
var button = document.createElement('button');
button.innerHTML = '제출';
var resultDiv = document.createElement('div');
body.append(form);
form.append(input);
form.append(button);
body.append(resultDiv);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (Number(input.value) === result) {
        resultDiv.textContent = '딩동댕';
        numberOne = Math.ceil(Math.random() * 9);
        numberTwo = Math.ceil(Math.random() * 9);
        p.innerHTML = numberOne + " * " + numberTwo + "?";
        result = numberOne * numberTwo;
    }
    else {
        resultDiv.textContent = '땡';
    }
    input.value = '';
    input.focus();
});
