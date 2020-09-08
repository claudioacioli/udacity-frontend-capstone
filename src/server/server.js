//Requiriments
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
// Utilities
const { getGeolocationByCity } = require('./lib/api')
// Settings
const port = 3000
const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))

app.get('/api/', async (req, res) => {
  
  const city = req.query.city ? req.query.city.toString().trim() : ''
  const date = req.query.date ? req.query.date.toString().trim() : ''

  const result = city.length
    ? await getGeolocationByCity(city)
    : {} 
  
  res.send(result)

})

//Routes
app.use((req, res) => {
  res.type('text/plain')
  res.send('Ops, where are you?\nNot Found!')
})

app.listen(port, () => {
  console.log(`Running the server on ${port}`);
})
