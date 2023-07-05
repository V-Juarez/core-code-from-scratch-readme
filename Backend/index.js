const express = require('express')
const morgan = require('morgan')

// .env
const config = require('./config/index')

// router task
const routes = require('./routes/index')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next()
})

app.use('/api', routes)

app.listen(config.server_port, () => {
  console.log(`Server listen port ${config.server_port}`);
})