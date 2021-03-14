const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const cors = require('cors')
const db = require('./db')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
const v1User = require('./routes/v1/users-route');
app.use('/api/v1/users', v1User);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))