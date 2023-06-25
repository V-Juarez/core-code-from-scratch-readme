const express = require('express')
const morgan = require('morgan')
// const cors = require('cors')
const config = require('./config/index')

// app.use(cors())
const app = express()
const routes = require('./routes/index')

app.use(express.json())
app.use(morgan('dev'))

app.use((request, response, next) => {
  console.log(request.url, request.method);
  next()
})

app.use('/api', routes)


app.listen(config.server_port, () => {
  console.log(`Server listen port ${config.server_port}`);
})
