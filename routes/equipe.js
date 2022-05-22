const express = require('express');
const router = express.Router();

const equipeController = require('../controllers/equipeController');

router.get('/', equipeController.index);

router.get('/perfil', equipeController.viewPerfil);
router.put('/perfil', equipeController.editPerfil);

module.exports = router;