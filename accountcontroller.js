// controllers/dataController.js
const DataModel = require('../models/accmodel');

async function postData(req, res) {
  const { accno, accfname, acclname, address } = req.body;

  if (!accno || !accfname || !acclname || !address) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await DataModel.insertData({ accno, accfname, acclname, address });
    return res.status(201).json({ message: 'Data inserted successfully' });
  } catch (err) {
    console.error('Error inserting data:', err);
    return res.status(500).json({ message: 'Error inserting data' });
  }
}

module.exports = {
  postData,
};