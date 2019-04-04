var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if (req.session.user){
        res.json(404, {status: false, message:"no results found"});
    } else {
            res.send(
                '<h2>Access Denied!!!!!</h2>' +
                '<p>You must login before you can access this page<p>' +
                '<br><br><a href="/">Return Home</a>'
            );
    }
});

module.exports = router;
