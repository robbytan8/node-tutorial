const path = require('path')
const express = require('express')

const router = express.Router()
router.use(express.static('public'))

router.get('/home', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'dashboard.html'))
})

router.get('/fam-card', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'family-card-index.html'))
})

router.get('/citizen', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'citizen-index.html'))
})

router.post('/citizen', (req, res) => {
  res.send(`
    <h1>Hello from Express Page 02</h1>
    <p>Hello, nice to meet you ${req.body.name}</p>
  `)
})

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../views', 'dashboard.html'))
})

module.exports = router