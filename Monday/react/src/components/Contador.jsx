import React, { useState } from "react";

// function parameter
const Contador = ({ cantidad }) => {
  let count = 0;

  // change state
  const [numero, setNumero] = useState(0);
  const [contador, setContador] = useState(0);

  const sumar = () => {
    // count = count + 1;
    // console.log(count);
    setNumero(numero + cantidad);
  };

  const restar = () => {
    setNumero(numero - cantidad);
  };

  const incrementCount = () => {
    if (contador >= 0) {
      setContador(contador + 1);
    }
  };

  const decrementCount = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    }
  };

  return (
    <React.Fragment>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button onClick={incrementCount}>Sumar</button>
      <button onClick={decrementCount}>Restar</button>
      <div>Hola, React</div>
      <h1>{1 + 2}</h1>
      <h3>Addition</h3>
      <h4>{numero}</h4>
      <button onClick={sumar}>add</button>
      <button onClick={restar}>rest</button>
    </React.Fragment>
  );
};

export default Contador;
