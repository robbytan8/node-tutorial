const express = require('express')

const app = express();

app.use(express.urlencoded({
  extended: true
}))
const myRoutes = require('./routes/route')

app.use(myRoutes)

// Send 404 Error Page
app.use((req, res, next) => {
  res.render('404')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})