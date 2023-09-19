import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MylineChart from './components/MylineChart/MylineChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MylineChart></MylineChart>
    </>
  )
}

export default App
