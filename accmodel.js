// models/DataModel.js
const db = require('../config/dbConfig');

function insertData(data) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO accounts (accno, accfname, acclname, address) VALUES (?, ?, ?, ?)';
    db.query(sql, [data.accno, data.accfname, data.acclname, data.address], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  insertData,
};