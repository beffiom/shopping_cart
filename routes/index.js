var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile('views/shopping.html', { root: './' });
});

module.exports = router;
