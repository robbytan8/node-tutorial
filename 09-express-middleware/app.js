const express = require('express')
const app = express();

//  Creating middleware
app.use((req, res, next) => {
  console.log('In Middleware 01')
  next()
})
//  Next middleware
app.use((req, res) => {
  console.log('In middleware 02')
  res.send('<h1>Hello from Express</h1>')
})

app.listen(8000, () => {
  console.log('Server is running at port 8000')
})