import React from "react";

const User = ({ data }) => {
  // destructurar obj
  const { name, age } = data;
  return (
    <>
      <div>
        <p></p>
        <h2>{`name: ${name}`} {`age: ${age}`}</h2>
      </div>
    </>
  );
};

export default User;
