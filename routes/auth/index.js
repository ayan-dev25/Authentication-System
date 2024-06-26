const express = require('express');
const router = express.Router();

const loginRoutes = require('./login');
const registerRoutes = require('./register');
const logoutRoutes = require('./logout');

router.use('/login', loginRoutes);
router.use('/register', registerRoutes);
router.use('/logout', logoutRoutes);

module.exports = router;