const Citizen = require('../model/Citizen')
const FamilyCard = require('../model/FamilyCard')

const index = (req, res) => {
  const citizen = new Citizen();
  citizen.all(citizens => {
    res.render('citizen/index', {
      citizens
    })
  })
}

const create = (req, res) => {
  const familyCard = new FamilyCard()
  familyCard.all(familyCards => {
    res.status(200).render('citizen/create', {
      familyCards
    })
  })
}

const store = (req, res) => {
  const newCitizen = new Citizen(req.body.id, req.body.name, req.body.address, req.body.fam_card_id)
  newCitizen.save()
  res.redirect('/citizen')
}

module.exports = {index, create, store}