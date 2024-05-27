const path = require('path')
const express = require('express')

const router = express.Router()

router.get('/home', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'dashboard.html'))
})

router.get('/page1', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'form.html'))
})

router.post('/page2', (req, res) => {
  res.send(`
    <h1>Hello from Express Page 02</h1>
    <p>Hello, nice to meet you ${req.body.name}</p>
  `)
})

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'dashboard.html'))
})

module.exports = router