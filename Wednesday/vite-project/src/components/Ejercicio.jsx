import React, { useEffect, useState } from 'react'

function Ejercicio() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1)
  const getData = async () => {
    // fetch('https://reqres.in/api/users?page=2')
    //   .then((response) => response.json()) 
    //   .then((data) => { 
    //     console.log(data.data)
    //     setList(data.data)
    //   })
    const result = await fetch(`https://reqres.in/api/users?page=${page}`)
    const resultJson = await result.json()
    console.log(resultJson.data);
    setList(resultJson.data)
  }

  useEffect(()=> {
    getData()
  },[page])

  // next
  const next = () => {
    setPage(page + 1)
  }

  const back = () => {
    setPage(page - 1)
  }

  return (
    <div>
      <h1>Ejercicio Fetch -> Page: {page}</h1>
      <button onClick={back}>{`back <-`}</button>
      <button onClick={next}>{`next ->`}</button>

      {list.map((user)=> {
        return <div key={user.id}>

          <h2>{user.first_name}</h2>
          <span>{user.last_name}</span>
          <br />
          <br />
          <img src={user.avatar} />
        </div> 
      })}
    </div>
  )
}

export default Ejercicio