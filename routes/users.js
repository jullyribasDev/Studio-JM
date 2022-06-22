var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioController');

/* GET users listing. */
router.get('/', usuarioController.allUsuarios);
router.get('/search', usuarioController.oneUsuario);

router.post('/createUser', usuarioController.create);

router.put('/editarUser/:id', usuarioController.update);

router.delete('/deleteUser/:id', usuarioController.destroy);

module.exports = router;