import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CodeSession from './components/CodeSession'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [render, setRender] = useState(false)

  const cambio = () => {
    setRender(!render)
  }

  return (
    <>
    {render && <CodeSession />}
    <button onClick={cambio}>Cambio</button>
    </>
  )
}

export default App
