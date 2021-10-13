require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { API_PORT } = process.env;

const app = express()
const apiPort = API_PORT || 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const db = require('./db')
const router = require('./routes/router')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('connected', () => console.log('MongoDB is connected successfully.'))

app.use('/api', router)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
