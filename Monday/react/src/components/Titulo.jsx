import React from "react";

const Titulo = ({ texto = "Title Default", funDe }) => {
  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={funDe}>+info</button>
    </div>
  );
};

export default Titulo;
