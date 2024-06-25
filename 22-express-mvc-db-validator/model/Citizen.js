const mysql = require('mysql')
const config = require('../config/mysql_db')

class Citizen {
  constructor() {
    this.db = mysql.createConnection(config.db);
    this.db.connect(err => {
      if (err) throw err;
      console.log('Connected to MySQL');
    });
  }

  save() {
    citizens.push(this)
  }

  all(callback) {
    this.db.query('SELECT c.id, c.name, c.address, birth_date, marital_status, job, blood_type, religion, family_card_id, family_head_name FROM citizen c JOIN family_card fc ON c.family_card_id = fc.id', (err, results, fields) => {
      if (err) throw err
      const citizens = results.map(result => ({
        id: result.id,
        name: result.name,
        address: result.address,
        birth_date: result.birth_date,
        marital_status: result.marital_status,
        family_card: {
          id: result.family_card_id,
          name: result.family_head_name
        },
      }))
      return callback(citizens)
    })
    this.db.end()
  }
}

module.exports = Citizen