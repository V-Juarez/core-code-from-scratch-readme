import { useState } from 'react'
import { AppTwo } from './components/AppTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppTwo />
    </>
  )
}

export default App
