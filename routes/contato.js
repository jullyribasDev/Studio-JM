const express = require('express');
const router = express.Router();

const contatoController = require('../controllers/contatoController');

router.get('/', contatoController.index);

module.exports = router;