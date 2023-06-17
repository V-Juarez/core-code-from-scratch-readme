import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StandUp from './components/StandUp'
import './App.css'

function App() {
  const [render, setRender] = useState(false)
  const [list, setList] = useState([])

  const cambio = () => {
    setRender(!render)
  }
  return (
    <>
      <img src={viteLogo} />
      <img src={reactLogo} />

      {render && <StandUp setList={setList}/>}
      <button onClick={cambio}>{render?"ocultar - ":"mostrar"}</button>

      {list.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.first_name}</h2>
            <h3>{user.last_name}</h3>
            <img src={user.avatar} />
            <p>{user.email}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
