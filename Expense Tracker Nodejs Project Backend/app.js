const http = require('http')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
const bodyParser = require('body-parser')
const registerRouter = require('./routes/register')

app.use(bodyParser.json({extended:false}))
app.use('/register',registerRouter)

const server = http.createServer(app)

server.listen(3000)