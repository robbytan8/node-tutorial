const familyCards = [
  {id: "000001", name: "John Doe"},
  {id: "000002", name: "Richard Max"},
]

const index = (req, res) => {
  res.render('family-card/index', {
    familyCards: familyCards
  })
}

const create = (req, res) => {
  res.status(200).render('family-card/create')
}

const store = (req, res) => {
  familyCards.push(req.body);
  res.redirect('/fam-card')
}

module.exports = {index, create, store, familyCards}