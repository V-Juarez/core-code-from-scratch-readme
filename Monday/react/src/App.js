import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Contador from './components/Contador'
import Titulo from './components/Titulo'
import Calculadora from './components/Calculadora.jsx'

function App() {
  const [mostrar, setMostrar] = useState(true)

  const cambio = () => {
    setMostrar(!mostrar)
  }

  const detalles = () => {
    console.log('hola button')
  }

  return (
    <div className="App">
    // Mostrar y desaparecer titulo
      <button onClick={cambio}>
        {mostrar? "ocultar" : "mostrar"}
      </button>
      {mostrar && <Titulo texto="useState the Ract Js" funDe={detalles} />}
      <Contador cantidad={5}/>
      <Contador cantidad={100}/>
      <Calculadora />
    </div>
  );
}

export default App;
