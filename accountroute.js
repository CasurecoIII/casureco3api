// routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const dataController = require('../controllers/accountcontroller');

// Define a POST route for inserting data
router.post('/addAccount', dataController.postData);

module.exports = router;