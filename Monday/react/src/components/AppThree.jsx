import React, { useStatete } from "react";

export const AppThree = () => {
  // let num = 3;

  const [listUsers, setlistUsers] = useState([
    { id: 1, name: "Juan", age: 20 },
    { id: 2, name: "David", age: 21 },
  ]);

  const agregar = () => {
    // let list = listUsers;
    //
    // list.push({ id: num, name: "Tomas", age: 23 })
    // console.log(list)
    // console.log(ListUsers)

    setlistUsers([...listUsers, { id: num, name: "Tomas", age: 23 }]);
    console.log("array", listUsers);
  };

  return (
    <div>
      {listUsers.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
      <button onClick={agregar}>agregar</button>
    </div>
  );
};
