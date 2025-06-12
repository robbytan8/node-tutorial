const Citizen = require('../model/Citizen')
const { body, validationResult } = require("express-validator");

const index = (req, res) => {
  const citizen = new Citizen();
  citizen.all()
    .then((citizens) => {
      res.status(201).json(citizens)
    })
    .catch((error) => {
      res.status(500).json({error: error});
    })
}

const store = (req, res) => {
  const {id, name, address, marital_status, birth_date, job, blood_type, religion, family_card_id} = req.body;
  const newCitizen = {
    id,
    name,
    address,
    marital_status,
    birth_date,
    job,
    blood_type,
    religion,
    family_card_id
  };
  const citizen = new Citizen();

  citizen.save()
    .then(() => {
      res.status(201).json({message: 'Citizen created successfully'});
    })
    .catch((error) => {
      res.status(500).json({error: error});
    });
}

module.exports = {index}