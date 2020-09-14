// 필요한 것->내선택 / 컴퓨터 선택 / 선택 - 좌표 / 선택 - 점수 / 인터벌 
let imgCoords = '0';

let RSP = {
  rock:'0',
  scissors:'-142px',
  paper:'-284px'
}
let score = {
  rock:0,
  scissors:1,
  paper : -1
}
let interval:number;
let makeInterval = () =>{
  interval = setInterval(()=>{
    if (imgCoords === RSP.rock) {
      imgCoords = RSP.scissors  
    } else if (imgCoords === RSP.scissors) {
      imgCoords = RSP.paper;
    } else {
      imgCoords = RSP.rock;
    }
  (document.querySelector('#computer') as HTMLDivElement).style.background =`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0` 
  },500)
}
makeInterval()

document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click',function(this:HTMLButtonElement){

    clearInterval(interval);
    setTimeout(makeInterval,2000);
    const myChoice = this.textContent as 'rock'|'scissors'|'paper';
    const myScore  = score[myChoice];
    const computerChoice = (Object.keys(RSP) as ['rock','scissors','paper']).find(v=>RSP[v] === imgCoords)!
    const computerScore = score[computerChoice];
    const diff = myScore - computerScore;
    const resultDiv = document.getElementById('result');
    let result='';
    switch (diff) {
      case 0:
        result = '비겼습니다.'
        break;
      case -1 || 2:
        result = '이겼습니다.'
        break;
      default:
        result = '졌습니다.'
    }
    (resultDiv as HTMLDivElement).textContent = result;
  })
})