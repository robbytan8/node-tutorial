const FamilyCard = require('../model/FamilyCard')
const {body, validationResult} = require("express-validator");

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

const store = [
  body('id')
    .notEmpty().withMessage('ID is required')
    .isLength({min: 15, max: 16}),
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({max: 100}),
  body('address')
    .notEmpty().withMessage('Address is required')
    .isLength({max: 300}).withMessage('Maximum address length is 300 character'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg)
      return res.render('family-card/create', {errors: errorMessages})
    }

    const {id, name, address} = req.body
    const familyCardData = {id, name, address}
    const familyCard = new FamilyCard()
    familyCard.save(familyCardData, (err, insertedId) => {
      if (err) {
        return res.render('family-card/create', {errors: 'Internal Server Error'});
      }
      res.redirect('/fam-card')
    })
  }
]

module.exports = {index, create, store}