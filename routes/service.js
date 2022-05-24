var express = require('express');
var router = express.Router();

const serviceController = require("../controllers/serviceController");

router.get('/addService', serviceController.viewAddService);

module.exports = router;