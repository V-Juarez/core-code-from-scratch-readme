import React from 'react'

const User = ({ data, handlerDelete }) => {
  const { id, name, age } = data;

  return (
    <>
      <div>
        <span>{`id: ${id}`}</span>
        <h2>{`name: ${name}`}</h2>
        <p>{`age: ${age}`}</p>
        <button onClick={handlerDelete}>- eliminar Registro</button>
      </div>
    </>
  );
};

export default User;