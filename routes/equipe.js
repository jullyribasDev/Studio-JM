const express = require('express');
const router = express.Router();

const equipeController = require('../controllers/equipeController');

router.get('/', equipeController.index);

router.get('/perfil', equipeController.viewPerfil);

module.exports = router;