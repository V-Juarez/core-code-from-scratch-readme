const express = require('express');
const morgan = require('morgan');

const  app = express()
app.use(express.json())
app.use(morgan('dev'))


const middle1 = (request, response, next) => {
  console.log('log1')
  const body = request.body
  console.log(body)
  next()
}

const middle2 = (request, response, next) => {
  console.log('log2'); 
  next()
}

const middle3 = (request, response, next) => {
  console.log('log3'); 
  next()
}

const middle4 = (request, response, next) => {
  console.log('log4'); 
  response.status(200).send('This is the last middleware')
  next()
}

app.get('/', middle1, middle2, middle3, middle4)
app.post('/', middle1, middle2, middle3, middle4)

app.listen(4000, () => {
  console.log("Server is running on port: ", 4000);
})