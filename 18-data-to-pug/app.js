const express = require('express')

const app = express();

app.set('view engine', 'pug')
app.set('views', 'views')

const myRoutes = require('./routes/route')
app.use(express.urlencoded({
  extended: false
}))

app.use(myRoutes)

// Send 404 Error Page
app.use((req, res, next) => {
  res.render('404')
})

app.listen(8000, () => {
  console.log('Server is running at port 8000')
})