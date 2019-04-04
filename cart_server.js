//import modules
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var crypto = require('crypto');

var shipping = require('./routes/shipping');
var login = require('./routes/login');
var logout = require('./routes/logout');
var register = require('./routes/register');
var index = require('./routes/index');
var products = require('./routes/products');
var orders = require('./routes/orders');
var customers = require('./routes/customers');
//end module imports

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret: 'TheSECRET',
	resave: false,
	saveUnitialized: true,
}));

app.use('/', index);
app.use('/products', products);
app.use('/orders', orders);
app.use('/customers', customers);
app.use('/shipping', shipping);
app.use('/images', express.static('./images'));
app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.listen(8080);

module.exports = app;

//var filePath = "static/shipping.html";
/*
http.createServer(function (req, res) {
	fs.readFile(filePath, function (err, data) {
		if (err) {
			res.writeHead(404);
			res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(8080);
*/
