var express = require('express');
var router = express.Router();

const serviceController = require("../controllers/serviceController");
const localServiceController = require('../controllers/locServiceController');

router.get('/all', serviceController.allService);

router.post('/adicionar', serviceController.createServico);
router.put('/atualizar/:id', serviceController.update);
router.delete('/deletar/:id', serviceController.destroy);

//local de atendimento
router.get('/local', localServiceController.index);
router.post('/local', localServiceController.createlocal);
router.put('/atualizarLocal/:id', localServiceController.update);
router.delete("/deletarLocal/:id", localServiceController.detroy);


module.exports = router;