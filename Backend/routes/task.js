const { Router, response } = require('express')
const moment = require('moment')
const router = Router()

// data
// const db  = require('./../services/db')
const { get }  = require('./../services/db')
const validatorData = require('./../middlewares/validatorData')

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
        isdone: Boolean(toDo.isDone),
        created_at: moment(toDo.created_at).format("YYYY-MM-DD")
      }
    })
    res.status(200).json({ message: "Lista de usuarios", data })
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

router.post('/', (req, res, next) => {
  console.log('Post');
})

router.patch('/', (req, res, next) => {
  console.log('patch');
})

router.delete('/', (req, res, next) => {
  console.log('delete');
})

module.exports = router