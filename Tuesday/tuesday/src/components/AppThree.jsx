import React, { useState } from "react";
import User from "./User";

export const AppThree = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Jose", age: 20 },
    { id: 2, name: "Messi", age: 30 },
    { id: 3, name: "Jorge", age: 24 },
  ]);

  const agregar = () => {
    setListUsers([...listUsers, { id: 4, name: "Tomas", age: 20 }]);
  };

  return (
    <>
      <div>AppThree</div>
      <div>
        {listUsers.map((user) => {
          return <User key={user.id} data={user} />;
        })}
        <button onClick={agregar}>+ agregar</button>
      </div>
    </>
  );
};
