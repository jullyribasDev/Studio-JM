const express = require('express');
const router = express.Router();

const logCadController = require('../controllers/logCadController');

router.get('/', logCadController.index);

module.exports = router;