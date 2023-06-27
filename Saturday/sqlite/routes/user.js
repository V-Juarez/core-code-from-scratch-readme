const { Router } = require("express");
const router = Router();
const { users } = require("./../services/array");
const { db, get } = require("./../services/db");
// Middleware
const validatorData = require("../middlewares/validatorData");

// get
router.get("/", async (request, response, next) => {
  try {
    const listUsers = await get("SELECT * FROM users", []);
    response
      .status(200)
      .json({ message: "lista de usuarios", data: listUsers });
  } catch (error) {
    response.status(500).json({ message: "Hay un error de servidor" });
  }
});

// post
router.post("/", validatorData, async (request, response, next) => {
  try {
    const { name, age } = request.body;
    // const id = users.length + 1;
    const data = await db.run(`INSERT INTO users (name, age) VALUES (?,?)`, [
      name,
      age,
    ]);
    console.log(data);
    // const newUser = {
    //   id,
    //   name,
    //   age,
    // };
    // users.push(newUser);
    response.status(200).json({ message: "se agrego usuario", user: data });
  } catch (error) {
    response.status(500).json({ message: "hay un error de servidor" });
  }
});

// patch
router.patch("/:id", async (request, response, next) => {
  try {
    // const { id, name, age } = request.body;
    const { id } = request.params;
    const usuarios = await get("SELECT * FROM users WHERE id = ?", [id]);

    // const userSelect = users.filter((user) => user.id === id);
    if (usuarios.length === 0) {
      return response
        .status(404)
        .json({ message: `no existe el usuario ID: ${id}` });
    }
    const { name, age } = request.body;
    await db.run(`UPDATE users SET name = ?, age = ? WHERE id = ?`, [
      name,
      age,
      id,
    ]);
    response.status(200).json({
      message: `el usuario ID: ${id} a sido modificado`,
      data: {
        id,
        name,
        age,
      },
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "hay un error de servidor" });
  }
});
//   users.map((user) => {
//     if (user.id === id) {
//       user.name = name;
//       user.age = age;
//     }
//     return user;
//   });
//   response
//     .status(200)
//     .json({ message: "Usuario actualizado" });
// });

// delete
router.delete("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const usuarios = await get("SELECT * FROM users WHERE id = ?", [id]);
    // const userSelect = users.filter((user) => user.id === id);
    if (usuarios.length === 0) {
      return response
        .status(404)
        .json({ message: `No existe el usuario ID ${id}` });
    }
    // users.splice(user, index)
    // users.map((user, index) => {
    //   if (user.id === id) {
    //     users.splice(index, 1);
    //   }
    //   return user;
    // });
    // response
    //   .status(200)
    //   .json({ message: `"El usiario ID:${id} a sido eliminado"` });
    await db.ruun("DELETE * FROM users WHERE id = ?", [id]);

    response.status(200).json({
      message: `el usuario ID: ${id} a sido eliminado`,
      data: {
        id,
        name: usuarios[0].name,
        age: usuarios[0].age,
      },
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "hay un error de servidor" });
  }
});

module.exports = router;
