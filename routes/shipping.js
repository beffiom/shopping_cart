var express = require('express');
var formParser = express.Router();

formParser.get('/', function (req,res) {
    res.sendFile('static/shipping.html' , { root : "./"});
});

formParser.post('/', function (req,res) {
    var response = '<form method="POST">' +
        '<h1>Hello ' + req.body.name + '</h1' +
        '<br><h3>Your shipping information</h3>' +
        '<p>Address: ' + req.body.address + '</p>' +
        '<p>City: ' + req.body.city + '</p>' +
        '<p>State: ' + req.body.state + '</p>' +
        '<p>Zip Code: ' + req.body.zipcode + '</p>';
        '</form>'
    res.type('html');
    res.end(response);
    console.log(req.body);
});

module.exports = formParser;
