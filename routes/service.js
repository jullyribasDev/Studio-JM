var express = require('express');
var router = express.Router();

const serviceController = require("../controllers/serviceController");

router.get('/', serviceController.allService);

//router.get('/addService', serviceController.viewAddService);
router.post('/addService', serviceController.createServico);

router.put('/atualizar/:id', serviceController.update);
router.delete('/deletar/:id', serviceController.destroy);

module.exports = router;