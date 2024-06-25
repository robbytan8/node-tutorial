const mysql = require('mysql')
const config = require('../config/mysql_db')

class FamilyCard {
  constructor() {
    this.db = mysql.createConnection(config.db);
    this.db.connect(err => {
      if (err) throw err;
      console.log('Connected to MySQL');
    });
  }

  all(callback) {
    const query = 'SELECT id, family_head_name, address FROM family_card'
    this.db.query(query, (err, results, fields) => {
      if (err) throw err
      const familyCards = results.map(result => ({
        id: result.id,
        name: result.family_head_name,
        address: result.address
      }))
      this.db.end()
      callback(familyCards)
    })
  }
}

module.exports = FamilyCard
