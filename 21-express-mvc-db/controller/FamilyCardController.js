const FamilyCard = require('../model/FamilyCard')

const index = (req, res) => {
  const familyCard = new FamilyCard()
  familyCard.all(familyCards => {
    res.render('family-card/index', {
      familyCards: familyCards
    })
  })
}

const create = (req, res) => {
  res.status(200).render('family-card/create')
}

const store = (req, res) => {
  // familyCards.push(req.body);
  const familyCard = new FamilyCard(req.body.id, req.body.name)
  familyCard.save()
  res.redirect('/fam-card')
}

module.exports = {index, create, store}