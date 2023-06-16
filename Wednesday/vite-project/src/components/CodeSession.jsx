import React, { useEffect, useState } from 'react'

const CodeSession = () => {
  const [numero, setNumero] = useState(0)
  const [number, setNumber] = useState(0)

  const sumar = () => {
    setNumero(numero + 2)
  }
  
  const restar = () => {
    setNumber(number - 3)
  }

  // Se ejecuta al inicio y en el cambio de estado
  useEffect(() => {
    console.log("start");
    
    return ()=>{
      console.log("end");
    }
  },[])

  // Se ejecuta en todos los cambios
  useEffect(() => {
    console.log("Cualquier cambio de Stado");
  })

  // Se ejecuta en un solo estado, asignando en el array de dependencias
  useEffect(() => {
    console.log('Solo cambio de numeros');
  }, [numero])

  return (
    <div>
      <h1>CodeSession</h1> 
      <h2>{numero}</h2>
      <h2>{number}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>
    </div>
  )
}

export default CodeSession