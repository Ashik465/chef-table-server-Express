const express = require('express')
const  cors = require('cors');
const app = express()
app.use(cors());
const port = 5000

const chefData = require('./data.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/chefdata', (req, res) => {
  res.send(chefData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})