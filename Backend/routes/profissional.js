const express = require('express');
const router = express.Router();

const profissionalController = require('../controllers/profissionalController');
const agendamentoController = require('../controllers/agendamentoController');

router.get('/', profissionalController.index);
router.get('/perfil', profissionalController.showPerfil);
router.post('/cadastro', profissionalController.create);
router.put('/atualizar/:id', profissionalController.update);
router.delete('/deletar/:id', profissionalController.destroy);

router.get('/agendamentos', agendamentoController.index);


module.exports = router;