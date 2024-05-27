const path = require('path')
const express = require('express')

const app = express();
const myRoutes = require('./routes/route')

app.use(express.urlencoded({
  extended: false
}))

app.use(myRoutes)

// Send 404 Error Page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'file-not-found.html'))
})

app.listen(8000, () => {
  console.log('Server is running at port 8000')
})