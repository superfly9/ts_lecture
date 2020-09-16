import React from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
  const onClick =({월,일}:{월:number,일:number})=>`오늘은 ${월}월 ${일}일`;
  return (
    <div>
      <Greeting name='Seung Chan' goal='하루하루 나를 아껴주는 것' onClick={onClick} />
    </div>
  )
}

export default App;