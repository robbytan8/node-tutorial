const express = require('express')

const router = express.Router()
const familyCardController = require('../controller/FamilyCardController')
const citizenController = require('../controller/CitizenController')

router.post('/fam-card/create', familyCardController.store)
router.get('/fam-card', familyCardController.index)

router.get('/citizen', citizenController.index)

module.exports = router