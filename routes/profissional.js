const express = require('express');
const router = express.Router();

const profissionalController = require('../controllers/profissionalController');

router.get('/', profissionalController.index);

module.exports = router;