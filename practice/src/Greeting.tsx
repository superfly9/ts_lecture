import React,{useState} from 'react';

//리액트 컴포넌트는 function 키워드를 이용한 함수 선언식을 , 그 외의 함수에는 arrow-function을 사용
type GreetingProps = {
    name : string,
    hobby:number,
    goal?:string,
    onClick:({월,일}:{월:number,일:number})=>string
}

function Greeting ({name,hobby,goal,onClick}:GreetingProps) {
    const [today,setToday] = useState('');
    const [showDate,setShowDate] = useState(false);
    console.log('name:',name,'hobby:',hobby,'goal:',goal);    
    const handleClick = ()=>{
        setShowDate(!showDate)
        setToday(onClick({월:new Date().getMonth()+1,일:new Date().getDate()}))
    }
    return (
        <div style={{padding:'100px'}}>
            <p>Hello, 나는 {name}</p>
            <p>좋아한다 {hobby}</p>
            {goal && <p>{goal}이 나의 목표</p>}
            <div style={{marginTop:'20px'}}>
                <button onClick={handleClick}>눌러눌러!</button>
            </div>
            {showDate &&<p>{today}</p>}
        </div>
    )
}
Greeting.defaultProps = {
    hobby:'누워서 멍때리기'
}
export default Greeting;