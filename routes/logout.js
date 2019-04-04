var express = require('express');
var logout = express.Router();

logout.get('/', function (req,res) {
    if (req.session.user) {
        res.send(
            '<h2>' + req.session.success + '</h2>' +
            '<p>You have entered the restricted section<p>' +
            '<a href="/logout">Logout</a>' +
            '<br><br><a href="/">Return Home</a>'
        );
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
});

module.exports = logout;
