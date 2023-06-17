import React, { useEffect } from 'react'

const StandUp = ({setList}) => {
  
  const getInfo = async () => {
    const result = await fetch('https://reqres.in/api/users?page=2')
    const resultJson = await result.json()
    console.log(resultJson.data)
    setList(resultJson.data)
  }

  useEffect(() => {
    console.log('Se ejecuta elComponente renderizado');
    getInfo()
  }, [])

  useEffect(() => {
    return () => {
      console.log('Se ejecuta cuando el componente se esta desmontando');
      setList([])
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