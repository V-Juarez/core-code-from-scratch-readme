import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Contador from './components/Contador'
import Titulo from './components/Titulo'

function App() {
  const [mostrar, setMostrar] = useState(true)

  return (
    <div className="App">
      {mostrar && <Titulo />}
      <Contador />
    </div>
  );
}

export default App;
