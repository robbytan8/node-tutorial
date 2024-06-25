const FamilyCard = require('../model/FamilyCard')
const Citizen = require('../model/Citizen')

const index = (req, res) => {
  res.status(200).render('citizen/index', {
    citizens: new Citizen().all()
  })
}

const create = (req, res) => {
  res.status(200).render('citizen/create', {
    famCards: new FamilyCard().all()
  })
}

const store = (req, res) => {
  const citizen = new Citizen()
  citizen.save({
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    family_card: {
      id: req.body.fam_card_id
    }
  })
  res.redirect('/citizen')
}

module.exports = {index, create, store}