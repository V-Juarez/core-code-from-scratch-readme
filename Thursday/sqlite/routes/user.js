const { Router } = require("express");
const router = Router();
const { users } = require("./../db/array");

// Middleware
const validatorData = require("../middlewares/validatorData");

router.get("/", (request, response, next) => {
  response.status(200).json({ message: "lista de usuarios", data: users });
});

router.post("/", validatorData, (request, response, next) => {
  try {
    const { name, age } = request.body;
    const id = users.length + 1;
    const newUser = {
      id,
      name,
      age,
    };
    users.push(newUser);
    response.status(200).json({ message: "se agrego usuario", user: newUser });
  } catch (error) {
    response.status(500).json({ message: "hay un error de servidor" });
  }
});

router.put("/", validatorData, (request, response, next) => {
  const { id, name, age } = request.body;
  const userSelect = users.filter((user) => user.id === id);
  if (userSelect.length === 0) {
    return response
      .status(200)
      .json({ message: "no existe el usuario en la db" });
  }
  users.map((user) => {
    if (user.id === id) {
      user.name = name;
      user.age = age;
    }
    return user;
  });
  response
    .status(200)
    .json({ message: "Usuario actualizado" });
});

router.delete("/", (request, response, next) => {
  const { id } = request.body;
  const userSelect = users.filter((user) => user.id === id);
  if (userSelect.length === 0) {
    return response
      .status(200)
      .json({ message: "No existe el usuario en la db" });
  }
  // users.splice(user, index)
  users.map((user, index) => {
    if (user.id === id) {
      users.splice(index, 1);
    }
    return user;
  });
  response
    .status(200)
    .json({ message: `"El usiario ID:${id} a sido eliminado"` });
});

module.exports = router;
