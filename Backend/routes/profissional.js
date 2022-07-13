const express = require('express');
const router = express.Router();

const profissionalController = require('../controllers/profissionalController');


router.get('/all', profissionalController.index);
router.get('/perfil', profissionalController.showPerfil);

router.post('/cadastro', profissionalController.create);

router.put('/atualizar/:id', profissionalController.update);

router.delete('/deletar/:id', profissionalController.destroy);




module.exports = router;