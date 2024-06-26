const express = require('express');
const { registerUser } = require('../../controllers/authController');
const router = express.Router();

// Register route
router.post('/', registerUser);

module.exports = router;