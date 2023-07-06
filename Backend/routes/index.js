const { Router } = require('express')
const router = Router()
const taskRouter = require('./task')

router.use('/task', taskRouter)

module.exports = router