import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StandUp from './components/StandUp'
import './App.css'

function App() {
  const [render, setRender] = useState(false)

  const cambio = () => {
    setRender(!render)
  }
  return (
    <>
      {render && <StandUp />}
      <button onClick={cambio}>{render?"ocultar - ":"mostrar"}</button>
    </>
  )
}

export default App
