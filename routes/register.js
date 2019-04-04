var express = require('express');
var register = express.Router();

register.get('/', function (req,res) {
    res.sendFile('static/registration.html' , { root : "./"});
});

module.exports = register;
