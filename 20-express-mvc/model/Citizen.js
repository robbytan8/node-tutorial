const citizens = []

class Citizen {

  constructor() {
  }

  save(citizenData) {
    citizens.push(citizenData)
  }

  all() {
    return citizens
  }
}

module.exports = Citizen