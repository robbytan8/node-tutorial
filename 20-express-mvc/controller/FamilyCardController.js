const FamilyCard = require('../model/FamilyCard')

const index = (req, res) => {
  const familyCard = new FamilyCard()
  res.render('family-card/index', {
    familyCards: familyCard.all()
  })
}

const create = (req, res) => {
  res.status(200).render('family-card/create')
}

const store = (req, res) => {
  const familyCard = new FamilyCard()
  familyCard.save({
    id: req.body.id,
    name: req.body.name
  })
  res.redirect('/fam-card')
}

module.exports = {index, create, store}