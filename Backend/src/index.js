const express = require('express')
const morgan = require('morgan')
const cors = require(`cors`)
// .env
const config = require('./config/index')
const { initDB } = require('./services/db')

// router task
const app = express()
const routes = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next()
})

app.use('/api', routes)

try {
  initDB()
  app.listen(config.server_port, () => {
    console.log(`Server listen port ${config.server_port}`);
  })
} catch (error) {
  console.log(error);
}
