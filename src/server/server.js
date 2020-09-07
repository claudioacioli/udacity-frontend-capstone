const express = require('express')
const port = 3000
const app = express()

//Routes
app.use((req, res) => {
  res.type('text/plain')
  res.send('Ops, where are you?\nNot Found!')
})

app.listen(port, () => {
  console.log(`Running the server on ${port}`);
})
