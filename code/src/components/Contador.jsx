import React, { useState } from 'react';

const Contador = () => {
  const [numero, setNumero] = useState()

  const [contador, setContador] = useState(0)

  const incrementCount = () => {
    if (contador >= 0) {
      setContador(contador + 1)
    }
  }

  const decrementCount = () => {
    if (contador >= 1) {
      setContador(contador - 1)
    }
  }

  return (
    <React.Fragment>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={incrementCount}>Sumar</button>
      <button onClick={decrementCount}>Restar</button>
      <div>Hola, React</div>
    </React.Fragment>
  )
}

export default Contador;
