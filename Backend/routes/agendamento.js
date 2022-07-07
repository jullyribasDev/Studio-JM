const express = require('express');
const router = express.Router();

const agendamentoController = require('../controllers/agendamentoController');


router.get('/', agendamentoController.index);

module.exports = router;