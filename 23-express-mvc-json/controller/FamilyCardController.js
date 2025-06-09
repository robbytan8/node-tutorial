const FamilyCard = require('../model/FamilyCard')
const { body, validationResult } = require("express-validator");

const store = [
  body('id')
    .notEmpty().withMessage('ID is required')
    .isLength({ min: 15, max: 16 }).withMessage('ID must be between 15 and 16 characters'),
  body('name')
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Maximum name length is 100 characters'),
  body('address')
    .notEmpty().withMessage('Address is required')
    .isLength({ max: 300 }).withMessage('Maximum address length is 300 character'),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg)
      res.status(400).json({
        error: errorMessages
      });
    } else {
      const { id, name, address } = req.body
      const familyCardData = { id, name, address }
      const familyCard = new FamilyCard()
      familyCard.save(familyCardData)
        .then(() => {
          res.status(201).json({
            message: 'Family Card created successfully',
            data: {
              id,
              name,
              address
            }
          });
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({
            error: 'Internal Server Error'
          });
        })
    }
  }
]

const index = (req, res) => {
  const familyCard = new FamilyCard()
  familyCard.all()
    .then(familyCards => {
      res.status(200).json(familyCards)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Internal Server Error'
      });
    })
}

module.exports = { index, store }