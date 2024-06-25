const express = require('express')

const router = express.Router()
const familyCardController = require('../controller/FamilyCardController')
const citizenController = require('../controller/CitizenController')

router.use(express.static('public'))

router.get('/fam-card/create', familyCardController.create)
router.post('/fam-card/create', familyCardController.store)
router.get('/fam-card', familyCardController.index)

router.get('/citizen/create', citizenController.create)
router.post('/citizen/create', citizenController.store)
router.get('/citizen', citizenController.index)
router.get('/home', (req, res) => {
  res.render('dashboard')
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