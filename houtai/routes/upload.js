var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/uploadController')

router.post('/', ctrl.checkToken, ctrl.upload);

module.exports = router;


