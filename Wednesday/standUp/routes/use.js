const { Router } = require('express')
const router = Router()

router.put('/', (req, res, next) => {
  const 
})

router.delete("/", (req, res, next) => {
  const { id, name, age } = req.body 
  const userSelect = users.filter((user) => user.id === id)
  if (userSelect.length === 0) {
    return res
      .status(200)
      .json({ mesage: "Usuario eliminado"})
  }
})

module.exports = router