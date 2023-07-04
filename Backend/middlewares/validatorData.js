const { response } = require("express")

const validatorData = (req, res, next) => {
  if (req.body.title === undefined || req.body.description === undefined ||req.body.state === undefined){
    return res.status(400).json({ message: 'Faltan datos'})
  }

  if (req.body.name.length < 8) {
    return res.status(400).json({ message: 'El nombre es my corto' })
  }

  if (req.body.description < 18) {
    return res.status(400).json({ message: 'Deve ser mayor de edad' })
  }

  console.log('Aqui')
  next()
  console.log(Date())
}

module.exports = validatorData