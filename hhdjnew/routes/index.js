var express = require('express');
var router = express.Router();

/* import Base from './base'
class Index extends Base{
  

} */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

