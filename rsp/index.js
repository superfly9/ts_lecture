"use strict";
// 필요한 것->내선택 / 컴퓨터 선택 / 선택 - 좌표 / 선택 - 점수 / 인터벌 
var imgCoords = '0';
var RSP = {
    rock: '0',
    scissors: '-142px',
    paper: '-284px'
};
var score = {
    rock: 0,
    scissors: 1,
    paper: -1
};
var interval;
var makeInterval = function () {
    interval = setInterval(function () {
        if (imgCoords === RSP.rock) {
            imgCoords = RSP.scissors;
        }
        else if (imgCoords === RSP.scissors) {
            imgCoords = RSP.paper;
        }
        else {
            imgCoords = RSP.rock;
        }
        var computerDiv = document.querySelector('#computer');
        computerDiv.style.height = '200px';
        computerDiv.style.width = '142px';
        computerDiv.style.background = "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + imgCoords + " 0";
    }, 500);
};
makeInterval();
document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(interval);
        setTimeout(makeInterval, 2000);
        var myChoice = this.textContent;
        var myScore = score[myChoice];
        var computerChoice = Object.keys(RSP).find(function (v) { return RSP[v] === imgCoords; });
        var computerScore = score[computerChoice];
        var diff = myScore - computerScore;
        var resultDiv = document.getElementById('result');
        var result = '';
        switch (diff) {
            case 0:
                result = '비겼습니다.';
                break;
            case -1:
                result = '이겼습니다.';
                break;
            case 2:
                result = '이겼습니다.';
                break;
            default:
                result = '졌습니다.';
        }
        console.log(result);
        resultDiv.textContent = "\uACB0\uACFC:" + result;
    });
});
var start = 3;
var interval2 = setInterval(function () {
    if (start === 0) {
        console.log('종료!!!');
        return clearInterval(interval2);
    }
    console.log(start);
    start -= 1;
}, 1000);
//3초 안에 안내면 끝나게함
