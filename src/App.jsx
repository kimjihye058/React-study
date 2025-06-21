import './App.css'
import Hello from './components/Hello'
import Counter from './components/Counter'
import { useState } from 'react'
import Good from './components/Good'

function User(props){
  return <p>{props.name}님 환영합니다.</p>
}

function Button({label, color}) {
  return <button style={{backgroundColor: color}}> {label} </button>
}

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const [isGood, setIsGood] = useState("좋아요");

  return (
    <>
      <h1>로그인 예제</h1>
      <button onClick={()=> setIsLogin(!isLogin)}>{isLogin ? "로그아웃" : "로그인"}</button>
      <Hello isLogin={isLogin}/>
      <Hello isLogin={isLogin}/>
      <User name="김지혜"/>
      <Button label="취소" color="red"/>
      <h1>좋아요 버튼 만들기</h1>
      <button onClick={()=> setIsGood(!isGood)}>{isGood ? "좋아요" : "좋아요 취소"}</button>
    </>
  )
}

export default App
