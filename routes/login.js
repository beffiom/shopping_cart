var express = require('express');
var crypto = require('crypto');
var login = express.Router();

function hashPW(pwd){
	return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}

login.get('/', function (req,res) {
    res.sendFile('static/login.html' , { root : "./"});
    /*if (req.session.user){
        res.redirect('/logout');
    } else if (req.session.error) {

    }*/
});

login.post('/', function (req,res) {
    var user = {name:"jdoe@mymusicstore.com", password:hashPW("welcome1")};

    if (user.name === req.body.username.toString()){
        if (user.password === hashPW(req.body.password.toString())) {
            req.session.regenerate(function() {
                req.session.user = user;
                req.session.success = 'Authenticated as ' + user.name;
                res.redirect('/orders');
            });
        } else {
            req.session.regenerate(function(){
                req.session.error = 'Authentication failed.';
            });
            res.redirect('/login');
        }
    } else {
        req.session.regenerate(function(){
            req.session.error = 'Authentication failed.';
        });
        res.redirect('/login');
    }
});

module.exports = login;
