//Requiriments
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const { createTravelRoute, notFoundRoute } = require('./routes')

// Settings
const port = 3000
const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

// Routes
app.post('/api/', createTravelRoute)
app.use(notFoundRoute)

// Listening
app.listen(port, () => {
  console.log(`Running the server on ${port}`);
})
