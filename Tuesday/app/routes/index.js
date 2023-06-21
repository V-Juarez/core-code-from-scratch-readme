const { Router } = require('express')
const router = Router()

router.get('/', (request, response, next) => {
  response.status(200).json({ message: 'get'})
})

router.post('/', (request, response, next) => {
  response.status(200).json({ message: 'post'})
})

router.put('/', (request, response, next) => {
  response.status(200).json({ message: 'put'})
})

router.delete('/', (request, response, next) => {
  response.status(200).json({ message: 'delete'})
})



module.exports = router