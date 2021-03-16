const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const cors = require('cors')
const db = require('./db')

const app = express()
const apiPort = 5000
const v1route = require('./routes/v1/routes');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1', v1route);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))