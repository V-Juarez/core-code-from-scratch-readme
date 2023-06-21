const express = require('express')
const morgan = require('morgan')

const app = express()
const routes = require('./routes/index')

app.use(express.json())
app.use(morgan('dev'))

app.use((request, response, next) => {
  console.log(request.url, request.method);
  next()
})

app.use('/api', routes)


app.listen(4000, () => {
  console.log('Server listen port 4000');
})
