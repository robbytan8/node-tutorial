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

  save(data, callback) {
    const {id, name, address} = data;

    // Simple validation: Ensure name and address are not empty
    if (!id || !name || !address) {
      return callback(new Error('ID, family head name, and address are required'));
    }

    const sql = 'INSERT INTO family_card(id, family_head_name, address) VALUES (?, ?, ?)';
    this.db.query(sql, [id, name, address], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result.insertId);
    });
  }

  all(callback) {
    const query = 'SELECT id, family_head_name, address FROM family_card'
    this.db.query(query, (err, results, fields) => {
      if (err) {
        return callback(err)
      }
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
