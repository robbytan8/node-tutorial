const express = require('express')

const router = express.Router()
router.use(express.static('public'))

router.get('/fam-card/create', (req, res) => {
  res.render('family-card/create')
})

router.get('/fam-card', (req, res) => {
  res.render('family-card/index')
})

router.get('/home', (req, res) => {
  res.render('dashboard')
})

router.get('/citizen', (req, res) => {
  res.render('citizen/index')
})

router.post('/citizen', (req, res) => {
  res.send(`
    <h1>Hello from Express Page 02</h1>
    <p>Hello, nice to meet you ${req.body.name}</p>
  `)
})

router.get('/', (req, res) => {
  res.render('dashboard')
})

module.exports = router