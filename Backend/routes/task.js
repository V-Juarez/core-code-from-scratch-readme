const { Router } = require('express')
const router = Router()

// data
const { get } = require('./../services/db')
const validatorData = require('./../middlewares/validatorData')

router.get('/', (req, res, next) => {
  console.log(
    'peticion get'
  );
})

router.post('/', (req, res, next) => {
  console.log('Put');
})

router.patch('/', (req, res, next) => {
  console.log('patch');
})

router.delete('/', (req, res, next) => {
  console.log('delete');
})

module.exports = router