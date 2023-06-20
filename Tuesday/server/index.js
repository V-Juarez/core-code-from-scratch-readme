const express = require('express');
const app = express()
const routes = require('./routes/index.js')

app.use(express.json)

app.use((req, res, next) => {
  console.log(req.url, req.method)
  next()
})

app.use('/api', routes)

app.listen(4000, () => {
  console.log('Server listening on port 4000')
})