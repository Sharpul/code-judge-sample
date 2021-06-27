var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/add', function(req, res, next) {
  let number1=(req.body.number1!=undefined)?req.body.number1:0;
  let number2=(req.body.number2!=undefined)?req.body.number2:0;
  let result={
  	sum:parseInt(number1)+parseInt(number2)
  }
  return res.status(200).json(result)
});
module.exports = router;
