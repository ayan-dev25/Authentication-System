const express = require('express');
const { getAllUsersController, getAllActiveUsersController, getSpecificUserController } = require('../../controllers/userController');
const router = express.Router();

// Register route
router.get('/', getAllUsersController);
router.get('/active', getAllActiveUsersController);
router.get('/:email', getSpecificUserController);

module.exports = router;
