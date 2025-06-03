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
  const familyCard = new FamilyCard()
  familyCard.save({
    id: req.body.id,
    name: req.body.name,
    address: req.body.address
  }, (err, insertId) => {
    if (err) {
      console.error('Error saving family card:', err)
      return res.render('family-card/create', {errors: 'Invalid data'});
    }
    console.log('Family card saved successfully')
    res.redirect('/fam-card')
  })
}

module.exports = {index, create, store}