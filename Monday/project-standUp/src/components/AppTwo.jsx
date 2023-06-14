import React, { useState } from 'react'

export const AppTwo = () => {

  const [data, setData] = useState({
    nombre: 'Kun',
    apellido: 'Senpai',
    edad: 0
  });

  const cambiarNombre = () => {
    setData({...data, nombre: 'Leonardo'})
  }

  // if(true) {

  // } else {

  // }
  const [detalles, setDetalles] = useState(false)

  const cambiarDetalles = () => {
    setDetalles(!detalles)
  }
  return (
    <>
      <h1>{`Hola ${data.nombre} ${data.apellido} como estas?`}</h1>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
      <h1>Titulo</h1>
      {detalles &&<p>lorem lorem lorem lore lorem </p>}
      <button onClick={cambiarDetalles}>{detalles? "- ocultar" : "+ detalles"}</button>
      {/* {false ? <h2>Hola Mundo</h2> : <h3>No se cumple la condicion</h3>} */}
    </>
  )
}
  