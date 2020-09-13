var body = document.body;
var canditate = [];
var result = [];
// 시작할 창 - 전송할 폼-입력 창-버튼 - 결과창
var h2 = document.createElement('h2');
h2.textContent = 'ts 야구게임';
body.appendChild(h2);
var form = document.createElement('form');
var input = document.createElement('input');
var button = document.createElement('button');
var resultDiv = document.createElement('div');
button.textContent = '제출';
form.appendChild(input);
form.appendChild(button);
body.appendChild(form);
body.appendChild(resultDiv);
//후보 뽑기
var chooseNumber = function (a, b) {
    var numberLength = 10;
    for (var i = 0; i < 4; i++) {
        canditate.push(Math.floor(Math.random() * numberLength));
    }
    console.log('Candidate:', canditate);
};
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var count = 0;
    var strike = 0;
    var ball = 0;
    var value = input.value;
    if (count < 10) {
        console.log('Canditate:', canditate);
        console.log('value:', value);
        if (canditate.join('') === value) {
            resultDiv.textContent = '홈런!';
            count = 0;
            canditate = [];
            chooseNumber();
        }
        else {
            console.log('Cando:', canditate);
            canditate.forEach(function (v, i) {
                strike = String(v) === value[i] ? strike + 1 : strike;
                canditate.splice(canditate.indexOf(v), 1);
                ball = value.indexOf(String(v)) > -1 ? ball + 1 : ball;
            });
            console.log('Strike:', strike, 'ball:', ball);
            resultDiv.textContent = strike + " \uC2A4\uD2B8\uB77C\uC774\uD06C, " + ball + "\uBCFC\uC785\uB2C8\uB2E4.";
            count++;
        }
    }
    else {
        resultDiv.textContent = '횟수 초과입니다.';
        count = 0;
    }
    input.value = '';
    input.focus();
});
chooseNumber();
