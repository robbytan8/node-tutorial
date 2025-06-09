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

  save(data) {
    const {id, name, address} = data;

    if (!id || !name || !address) {
      return Promise.reject(new Error('ID, family head name, and address are required'));
    }

    const sql = 'INSERT INTO family_card(id, family_head_name, address) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      this.db.query(sql, [id, name, address], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result.insertId);
      });
    });
  }

  all = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT id, family_head_name, address FROM family_card'
      this.db.query(sql, (err, results) => {
        if (err) reject(err)
        resolve(results)
      })
    })
  }
}

module.exports = FamilyCard
