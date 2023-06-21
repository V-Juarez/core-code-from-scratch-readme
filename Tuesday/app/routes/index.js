const { Router } = require("express");
const router = Router();
const db = require("../db/array");

router.get("/user", (request, response, next) => {
  response.status(200).json({
    message: "Lists Users",
    data: db,
  });
});

router.post("/user", (request, response, next) => {
  // destructor Js
  try {
    const { name, age } = request.body;
    const id = db.length + 1;
    const newUser = {
      id: db.length === 0 ? 1 : db.length,
      name,
      age,
    };
    db.push(newUser);
    response.status(200).json({ message: "Create new user", user: newUser });
  } catch (error) {
    response.status(500).json({ message: "hay un error de servidor" });
  }
});

router.put("/user", (request, response, next) => {
  // validation user
  const { id, name, age } = request.body;
  const userSelect = db.filter((user) => user.id === id);
  if (userSelect.length === 0) {
    return response
      .status(200)
      .json({ message: "no existe el usuario en la db" });
  }

  // edit user
  db.map((user) => {
    if (user.id === id) {
      user.name = name;
      user.age = age
    }
    return user
  })
  response.status(200).json({ message: "Edit user" });
});

router.delete("/user", (request, response, next) => {
  response.status(200).json({ message: "delete" });
});

module.exports = router;
