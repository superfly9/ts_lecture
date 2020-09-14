// 필요한 것->내선택 / 컴퓨터 선택 / 선택 - 좌표 / 선택 - 점수 / 인터벌 
let imgCoords:RSP[keyof RSP] = '0';
interface RSP {
  rock:'0',
  scissors:'-142px',
  paper:'-284px'
}
let RSP:RSP={
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
    let computerDiv = (document.querySelector('#computer') as HTMLDivElement)
  computerDiv.style.height='200px';
  computerDiv.style.width='142px';
  computerDiv.style.background =`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0` 
  },500)
}
makeInterval()

document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click',function(this:HTMLButtonElement){

    clearInterval(interval);
    setTimeout(makeInterval,2000);
    const myChoice = this.textContent as keyof RSP;
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
      case -1:
        result = '이겼습니다.'
        break;
      case 2:
        result = '이겼습니다.'
        break;
      default:
        result = '졌습니다.'
    }
    console.log(result);
    (resultDiv as HTMLDivElement).textContent = `결과:${result}`;
  })
})

let start = 3;
const interval2 = setInterval(function() {
  if (start === 0) {
    console.log('종료!!!');
    return clearInterval(interval2);
  }
  console.log(start);
  start -= 1;
}, 1000);
//3초 안에 안내면 끝나게함