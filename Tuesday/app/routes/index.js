const { Router } = require('express')
const router = Router()

router.get('/user', (request, response, next) => {
  response.status(200).json({ message: 'get'})
})

router.post('/user', (request, response, next) => {
  response.status(200).json({ message: 'post'})
})

router.put('/user', (request, response, next) => {
  response.status(200).json({ message: 'put'})
})

router.delete('/user', (request, response, next) => {
  response.status(200).json({ message: 'delete'})
})



module.exports = router