var express = require('express');
var customerRouter = express.Router();

customerRouter.get('/', function(req, res) {
    res.json(404, {status: false, message:"no results found"});
});

customerRouter.post('/update/shipping', function(req, res) {
    res.json(404, {status: false, message:"no results found"});
});

customerRouter.post('/update/billing', function(req, res) {
    res.json(404, {status: false, message:"no results found"});
});

customerRouter.post('/update/cart', function(req, res) {
    res.json(404, {status: false, message:"no results found"});
});

module.exports = customerRouter;
