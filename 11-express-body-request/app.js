const express = require('express')
const app = express()

app.use(express.urlencoded({
  extended: false
}))

app.use('/page1', (req, res) => {
  res.send(`
    <form method="post" action="/page2">
      <label for="name-id">Name</label>
      <input type="text" id="name-id" name="name" placeholder="Your Name">
      <button type="submit">Submit</button>
    </form>  
  `)
})

app.use('/page2', (req, res) => {
  console.log(req.body)
  res.send('<h1>Hello from Express Page 02</h1>')
})

app.use('/', (req, res) => {
  res.send('<h1>Hello from Express</h1>')
})

app.listen(8000, () => {
  console.log('Server is running at port 8000')
})