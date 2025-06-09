const Citizen = require('../model/Citizen')
const FamilyCard = require('../model/FamilyCard')

const index = async (req, res) => {
  try {
    const citizen = new Citizen();
    const citizens = await citizen.all()
    res.json(citizens)
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const store = (req, res) => {
  const newCitizen = new Citizen(req.body.id, req.body.name, req.body.address, req.body.fam_card_id)
  newCitizen.save()
  res.redirect('/citizen')
}

module.exports = {index, store}