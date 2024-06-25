const familyCardController = require('./FamilyCardController')

const citizens = [
  {id: "327204080819880001", name: "John Doe", address: "Dummy Address 1", fam_card_id: "000001"},
  {id: "327204101019900001", name: "Susan Bones", address: "Dummy Address 1", fam_card_id: "000001"},
  {id: "3272040104198580001", name: "Richard Max", address: "Dummy Address 3", fam_card_id: "000002"},
]

const index = (req, res) => {
  res.status(200).render('citizen/index', {
    citizens: citizens
  })
}

const create = (req, res) => {
  res.status(200).render('citizen/create', {
    famCards: familyCardController.familyCards
  })
}

const store = (req, res) => {
  citizens.push(req.body)
  res.redirect('/citizen')
}

module.exports = {index, create, store}