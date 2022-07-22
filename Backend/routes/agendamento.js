const express = require('express');
const router = express.Router();

const agendamentoController = require('../controllers/agendamentoController');


router.get('/', agendamentoController.index);
router.post('/agendar', agendamentoController.create);
router.delete('/deletar/:id', agendamentoController.delete);

module.exports = router;