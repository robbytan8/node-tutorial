const express = require('express')

const router = express.Router()
router.use(express.static('public'))

router.get('/fam-card/create', (req, res) => {
  res.render('family-card/create')
})

router.get('/fam-card', (req, res) => {
  res.render('family-card/index', {
    family_cards: [
      {id: "000001", name: "John Doe"},
      {id: "000002", name: "Richard Max"},
    ]
  })
})

router.get('/home', (req, res) => {
  res.render('dashboard')
})

router.get('/citizen', (req, res) => {
  res.render('citizen/index', {
    citizens: [
      {id: "327204080819880001", name: "John Doe", address: "Dummy Address 1", fam_card: {id: "000001", name: "John Doe"}},
      {id: "327204101019900001", name: "Susan Bones", address: "Dummy Address 1", fam_card: {id: "000001", name: "John Doe"}},
      {id: "3272040104198580001", name: "Richard Max", address: "Dummy Address 3", fam_card: {id: "000002", name: "Richard Max"}},
    ]
  })
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