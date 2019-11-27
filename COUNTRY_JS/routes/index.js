var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pages/:state/', function(req, res, next){
res.render('state', {state: country.info(req.params.state)}) ; //Rendiamo lo stato un parametro
})

module.exports = router;
