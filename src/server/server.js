const express = require('express')
const port = 3000
const app = express()
const { getGeolocationByCity } = require('./lib/api')

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
