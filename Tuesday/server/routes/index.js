const { Router, response } = require('express')
const router = Router()
const dv = require('../db/array')
const db = require('../db/array')

router.get('/user', (req, res, next) => {
  res.status(200).json({ message: 'Lista de usuarios', data: db })
})

router.post('/user', (req, res, next) => {
  const { name, age } = req.body
  db.push({
    id: db.length === 0? 1:db.length +1,
    name,
    age
  })
  console.log(db)
  res.status(200).json({ message: 'post' })
})

router.put('/user', (req, res, next) => {
  const { id, name, age } = req.body
  const userSelect = db.filter((user) => user.id === id)
  if (userSelect.length === 0) {
    return res
      .status(200)
      .json({ message: 'No existe el usuario en la db'})
  }
  db.map((user) => {
    if(user.id === id) {
      user.name = name;
      user.age = age;
    }
    return user
  })
  response.status(200).json({ message: 'put' })
})



module.exports = router