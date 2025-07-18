import { useState } from 'react'

import './App.css'
import Timer from './components/Timer'

function App() {
  const[show, setShow] = useState(true)

  return (
    <>
      {show && <Timer/>}
      <button onClick={() => setShow(!show)}>
        {show ? "숨기기" : "보이기"}
      </button>
    </>
  )
}

export default App