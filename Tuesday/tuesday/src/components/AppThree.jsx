import React, { useState } from "react";
import User from "./User";

export const AppThree = () => {
  let num  = 3;
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Jose", age: 20 },
    { id: 2, name: "Messi", age: 30 },
    { id: 3, name: "Jorge", age: 24 },
  ]);

  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  //   setListUsers([...listUsers, { id: 4, name: "Tomas", age: 20 }]);
  // };

  const [name, setName] = useState()
  const [age, setAge] = useState(0)

  const handlerName = (e) => {
    setName(e.target.value)
  }

  const handlerAge = (e) => {
    setAge(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(name, age)
    setListUsers([...listUsers, { id: num, name: name, age: age }]);
    num = num + 1;
    setName("");
    setAge(0)
  }

  return (
    <>
      <div>AppThree</div>
      <div>
        {listUsers.map((user) => {
          return <User key={user.id} data={user} />;
        })}
      </div>
    
      <form onSubmit={handlerSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={handlerName} placeholder="Juan"/>
        <br />
        <label>Age</label>
        <input type="number" value={age} onChange={handlerAge} placeholder="21"/>
        <br />
        <button onClick={handlerSubmit}>+ agregar</button>
      </form>
    </>
  );
};
