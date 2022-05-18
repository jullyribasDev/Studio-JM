const express = require('express');
const router = express.Router();

const editClienteController = require('../controllers/editCliente');

router.get('/editcliente', editClienteController.index);

module.exports = router;

