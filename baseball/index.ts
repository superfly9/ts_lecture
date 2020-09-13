const { body } =document;

let canditate:number []=[];
let result:number [] = [];

// 시작할 창 - 전송할 폼-입력 창-버튼 - 결과창
const h2: HTMLHeadingElement = document.createElement('h2')
h2.textContent='ts 야구게임';

body.appendChild(h2);

const form = document.createElement('form');
const input = document.createElement('input');
const button = document.createElement('button');
const resultDiv = document.createElement('div');

button.textContent = '제출';
form.appendChild(input);
form.appendChild(button);
body.appendChild(form);
body.appendChild(resultDiv);

//후보 뽑기
const chooseNumber=(a?:number,b?): void => {
    let numberLength = 10;
    for (let i:number=0;i<4;i++) {
        canditate.push(Math.floor(Math.random()*numberLength));
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let count = 0;
    let strike = 0;
    let ball = 0;
    let value = input.value;
    if (count<10) {
        if (canditate.join('') === value) {
            resultDiv.textContent='홈런!'
            count = 0;
            canditate=[];
            chooseNumber()
        } else {
            canditate.forEach((v,i)=>{
                if (String(v) === value[i]) {
                    strike+=1;
                } else {
                    ball = value.indexOf(String(v)) > -1 ? ball+=1 : ball;
                }
            })        
            resultDiv.textContent=`${strike} 스트라이크, ${ball}볼입니다.`
            count++;
        }
    } else {
        resultDiv.textContent='횟수 초과입니다.'
        count = 0; 
    }
    input.value = '';
    input.focus();
})
chooseNumber()