var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/clienteController');

/* GET users listing. */
router.get('/', usuarioController.allClientes);
router.get('/search', usuarioController.oneCliente);

router.post('/cadastro', usuarioController.create);

router.put('/atualizar/:id', usuarioController.update);

router.delete('/deletar/:id', usuarioController.destroy);

module.exports = router;