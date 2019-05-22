var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/vr-demo' , (req,res,next)=>{
  res.sendFile('/Users/kyeongsoo-yoo/00_DEV/03_Works/2019/masterpiece/99_reference/a-frame-1/views/modeling.html');
});

module.exports = router;
