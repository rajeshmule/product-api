const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const dbConnection = require('./database/connection')
const apiRouter = require('./api/routes/v1')

dotEnv.config()

const app = express()
const port = process.env.PORT || 3000

dbConnection()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', apiRouter)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({status: 500, message: err.message, body: {}})
})
