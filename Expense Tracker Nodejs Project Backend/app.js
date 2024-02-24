const http = require('http')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
const bodyParser = require('body-parser')
const registerRouter = require('./routes/register')

app.use(bodyParser.json({extended:false}))
app.use('/register',registerRouter)
app.use('/register', registerRouter)
app.use('/expense', expenseRouter)

app.use((req, res) => {
    res.send("Page not fuound 404!")
})

const server = http.createServer(app)

server.listen(3000)