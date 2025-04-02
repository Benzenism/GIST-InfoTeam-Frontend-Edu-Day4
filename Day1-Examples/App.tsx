//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import AutoTaco from './AutoTaco'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <AutoTaco
      name = {['홍제 선배', '성환 선배', '동연 선배', '다현 선배', '보성 선배']}
      count = {5}
    />
  )
}

export default App
