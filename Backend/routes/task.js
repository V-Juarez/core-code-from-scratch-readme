const { Router } = require('express')
const router = Router()
const { get, run }  = require('./../services/db')

const moment = require('moment')
// middleware
const validatorData = require('./../middlewares/validatorData')

// api
router.get('/', async (req, res, next) => {
  // const taskId = req.query.id
  try {
    console.log('peticion get');
    const toDos = await get('SELECT * FROM tasks')
    const data = toDos.map((toDo)=>{
      return {
        id: toDo.id,
        title: toDo.title,
        description: toDo.description,
        isdone: Boolean(toDo.isdone),
        created_at: moment(toDo.created_at).format("YYYY-MM-DD")
      }
    })
    res.status(200).json({ message: "Lista de tareas", data })
  } catch (error) {
    console.log(error);
  }
  // db.get("SELECT * FROM tasks WHERE id = ?", [taskId])
  //   .then((data) => {
  //     const dataFormatted = data.map((item) => {
  //       return {
  //         title: item['title'],
  //         desription: item['description'],
  //         isdone: item['isdone'],
  //         id: item['id'],
  //         created_at: moment(item.created_at).format("YYYY-MM-DD")
  //       }
  //     })
  //     res.json(dataFormatted)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // try {
  //   const listTask = await get("SELECT * FROM tasks")

  //   const data = listTask.map((toDo) => {
  //     return {
  //       id: toDo.id,
  //       title: toDo.title,
  //       description: toDo.description,
  //       isdone: Boolean(toDo.isdone),
  //       create_at: moment(toDo.create_at).format("YYYY-MM-DD")
  //     }
  //   })
  //   res.status(200).json({ message: "Lista de usuarios", data })
  //   console.log(json({ data }));
  // } catch (error) {
  //   res.status(500).json({ message: "Hay un error en el servidor" })
  // }
})

router.post('/', async (req, res, next) => {
  try {
    const { title, description, isdone, created_at } = req.body
    const data = await run("INSERT INTO tasks (title, description, isdone, created_at) VALUES (?, ?, ?, ?)", [title, description, isdone, created_at])
    console.log(data.lastID);

    res.status(200).json({
      message: "To-do created succesfully",
      // toDo: {}
      toDo: {
        id: data.lastID,
        title,
        description,
        isdone: false,
        created_at: moment(created_at).format("YYYY-MM-DD")
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error en el servidor", 
      error
    })
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    console.log('patch');
    const { id } = req.params
    const toDo = await get("SELECT * FROM tasks WHERE ID = ?", [id])
    if (toDo.length === 0) {
      return res
        .status(404)
        .json({ message: `el ID no se encuentra en la db`})
    }
    let { title, description, isdone, created_at } = req.body
    
    if (typeof isdone == 'undefined') {
      isdone = toDo[0].isdone
    }

    if (typeof title == 'undefined') {
      title = toDo[0].title
    }

    if (typeof description == 'undefined') {
      description = toDo[0].description
    }

    const isDoneNumber = Number(isdone)
    await run(`UPDATE tasks SET title = ?, description = ?, created_at = ?`, [title, description, created_at, isDoneNumber, id, ])

    res.status(200).json({
      message: `To-do updated succesfully`,
      toDo: {
        id: data.lastID,
        title,
        description,
        isdone: false,
        created_at: moment(created_at).format("YYYY-MM-DD")
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ 
      message: "error en el sevidor", error
    })
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const toDo = await get("SELECT * FROM tasks WHERE id = ?", [id])

    if (toDo.length === 0) {
      return res
        .status(404)
        .json({ message: `el ID no se encuentra en la db`})
    }
    await run("DELETE FROM tasks WHERE id = ?", [id])
    res.status(200).json({
      message: `To-do deleted successfully`,
      toDo: {
        id: toDo[0].id,
        title: toDo[0].title,
        description: toDo[0].description,
        isdone: Boolean(toDo[0].isdone),
        created_at: moment(created_at).format("YYYY-MM-DD")
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error en el servidor", error })
  }
})

module.exports = router