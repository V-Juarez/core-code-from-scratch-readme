const { Router } = require('express')
const moment = require('moment')
const router = Router()

// data
const db  = require('./../services/db')
const validatorData = require('./../middlewares/validatorData')

router.get('/', (req, res, next) => {
  const taskId = req.query.id
  console.log(
    'peticion get'
  );
  db.get("SELECT * FROM tasks WHERE id = ?", [taskId])
    .then((data) => {
      const dataFormatted = data.map((item) => {
        return {
          title: item['title'],
          desription: item['description'],
          isdone: item['isdone'],
          id: item['id'],
          created_at: moment(item.created_at).format("YYYY-MM-DD")
        }
      })
      res.json(dataFormatted)
    })
    .catch((error) => {
      console.log(error);
    })
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