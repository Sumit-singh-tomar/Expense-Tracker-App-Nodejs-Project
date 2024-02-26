const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');
const registerRouter = require('./routes/register');
const expenseRouter = require('./routes/expense');
const purchaseRouter = require('./routes/purchase');

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use('/register', registerRouter);
app.use('/expense', expenseRouter);
app.use('/purchase', purchaseRouter);

app.use((req, res) => {
    res.send("Page not fuound 404!");
})

const server = http.createServer(app);

server.listen(3000);