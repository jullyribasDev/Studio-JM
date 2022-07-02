const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contactController');

router.get('/', contactController.index);
router.post('/newContact', contactController.createContact);
router.delete('/delete/:id', contactController.destroy);
router.put('/atualizar/:id', contactController.update);

module.exports = router;