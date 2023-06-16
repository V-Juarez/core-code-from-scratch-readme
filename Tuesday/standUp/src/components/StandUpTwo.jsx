import React, { useState } from 'react'
import User from './User'

export const StandUpTwo = () => {
  let num = 3
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Jose", age: 20 },
    { id: 2, name: "David", age: 21 },
  ]);

  const [name, setName] = useState()
  const [age, setAge] = useState(0)

  const handlerSubmit = (e) => {
      e.preventDefault()
      console.log("name: ", name);
      console.log("age: ", age);
      setListUsers([...listUsers, { id: num, name: name, age: age }])
      num = num + 1
      setName("")
      setAge(0)
  };

  
  
  const handlerName = (e) => {
    setName(e.target.value)
  };

  const handlerAge = (e) => {
    setAge(e.target.value)
  };

  
  return (
    <>
      <h1>StandUpTwo</h1>    
      <div>
      {listUsers.map((user, index) => {
        // function anidado
        const handlerDelete = () => {
          console.log(user.id);
          const nuevaLista = listUsers.filter((item) => item.id !== user.id)
          setListUsers(nuevaLista)
        }
        return <User 
          key={index} 
          data={user} 
          handlerDelete={handlerDelete} />;
        })
      }
      </div>

      <form onSubmit={handlerSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handlerName} placeholder="name"/>
        <br />
        <label>Age</label>
        <input type="number" value={age} onChange={handlerAge} placeholder="21"/>
        <br />
        <button onClick={handlerSubmit}>+ agregar</button>
      </form>
    </>
  );
};
