import React, { useEffect } from 'react'

const StandUp = () => {
  useEffect(() => {
    console.log('Se ejecuta elComponente renderizado');
  }, [])

  useEffect(() => {
    return () => {
      console.log('Se ejecuta cuando el compon');
    }
  },[])

  return (
    <div>
      <h1>
        StandUp
      </h1>
    </div>
  )
}

export default StandUp