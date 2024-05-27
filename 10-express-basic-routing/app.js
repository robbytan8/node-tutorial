const express = require('express')
const app = express();

app.use('/page1', (req, res) => {
  console.log('In Page 01 middleware')
  res.send('<h1>Hello from Express Page 01</h1>')
})

app.use('/page2', (req, res) => {
  console.log('In page 02 middleware')
  res.send('<h1>Hello from Express Page 02</h1>')
})

app.use('/', (req, res) => {
  console.log('In root middleware')
  res.send('<h1>Hello from Express</h1>')
})

app.listen(8000, () => {
  console.log('Server is running at port 8000')
})