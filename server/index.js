const express = require('express')
const margan = require('morgan')
const server = express()

server.use(express.json())
server.use(margan('dev'))
// server.use((req, res, next) => {
//   console.log('log1');
//   res.status(200).send('Hello World')
//   next()
// })

// server.use('/index', (req, res, next) => {
//   console.log('log2');
//   // res.status(200).send('Hello World log2')
// })
// server.use((req, res, next) => {
//   console.log('log3');
//   next()
// })
// server.use((req, res, next) => {
//   console.log('log4');
//   next()
// })

const middled = (req, res, next) => {
  console.log('log1 middle');
  const body = req.body
  console.log('body');
  next()
}

const middled1 = (req, res, next) => {
  console.log('log1 middle2');
  next()
}


const middled2 = (req, res, next) => {
  console.log('log2 middle2');
  next()
}
const middled3 = (req, res, next) => {
  console.log('log3 middle3');
}

server.get('/index', middled)
server.post('/ps', middled1)
server.use(middled2)
server.use(middled3)


server.listen(4000, () => {
  console.log('Server start 4000');
})