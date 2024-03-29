const { Router } = require("express");
const router = Router();
const { get, run } = require("./../services/db");

const moment = require("moment");
// middleware
const validatorData = require("./../middlewares/validatorData");

// api
router.get("/", async (req, res, next) => {
  try {
    const toDos = await get("SELECT * FROM tasks");
    const data = toDos.map((toDo) => {
      return {
        id: toDo.id,
        title: toDo.title,
        description: toDo.description,
        isdone: Boolean(toDo.isdone),
        created_at: moment.utc(toDo.created_at).format("YYYY-MM-DD"),
        created_task: moment
          .utc(toDo.created_task)
          .format("YYYY-MM-DD HH:MM:SS"),
        updated_task: toDo.updated_task,
      };
    });
    res.status(200).json({ message: "To-dos retrieved successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error en el servidor", error });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, description, created_at } = req.body;

    const data = await run(
      "INSERT INTO tasks (title, description, created_at) VALUES (?, ?, ?)",
      [title, description, created_at]
    );

    if (!data || !data.lastID) {
      throw new Error("No se pudo obtener el ID de la tarea");
    }

    const insertedTaskId = data && data.lastID ? data.lastID : null;

    const insertedTask = {
      id: data.lastID,
      title,
      description,
      created_at: moment.utc(created_at).format("YYYY-MM-DD"),
    };

    res.status(200).json({
      message: "To-do created succesfully",
      toDo: insertedTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
      error,
    });
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const toDo = await get("SELECT * FROM tasks WHERE id = ?", [id]);
    if (toDo.length === 0) {
      return res
        .status(404)
        .json({ message: `el ID no se encuentra en la db` });
    }

    let { title, description, isdone, created_at } = req.body;

    if (typeof description == "undefined") {
      description = toDo[0].description;
    }

    if (typeof title == "undefined") {
      title = toDo[0].title;
    }
    if (typeof isdone === "undefined") {
      isdone = toDo[0].isdone;
    } else {
      isdone = Boolean(isdone);
    }

    if (typeof created_at == "undefined") {
      created_at = toDo[0].created_at;
    }

    const updated_task = moment().utc().format("YYYY-MM-DD HH:MM:SS");

    await run(
      `UPDATE tasks SET title = ?, description = ?, isdone = ?, created_at = ?, updated_task = ? WHERE id = ?`,
      [title, description, isdone, created_at, updated_task, id]
    );

    const updateTask = {
      id: toDo[0].id,
      title,
      description,
      isdone,
      created_at: moment(created_at).format("YYYY-MM-DD"),
      updated_task: moment(updated_task).format("YYYY-MM-DD HH:MM:SS"),
    };

    res.status(200).json({
      message: `To-do updated succesfully`,
      toDo: updateTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "error en el sevidor",
      error,
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDo = await get("SELECT * FROM tasks WHERE id = ?", [id]);

    if (toDo.length === 0) {
      return res
        .status(404)
        .json({ message: `el ID no se encuentra en la db` });
    }
    await run("DELETE FROM tasks WHERE id = ?", [id]);
    res.status(200).json({
      message: `To-do deleted successfully`,
      toDo: {
        id: toDo[0].id,
        title: toDo[0].title,
        description: toDo[0].description,
        isdone: Boolean(toDo[0].isdone),
        created_at: moment(toDo[0].created_at).format("YYYY-MM-DD"),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error en el servidor", error });
  }
});

module.exports = router;
