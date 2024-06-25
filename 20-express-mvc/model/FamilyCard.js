const familyCards = []

class FamilyCard {
  constructor() {
  }

  save(familyData) {
    familyCards.push(familyData)
  }

  all() {
    return familyCards
  }
}

module.exports = FamilyCard
