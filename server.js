//--node_modules--//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//--internal modules--//
var env = require('./.envVar');
var User = require('./models/userModel');
var ClientController = require('./api/controllers/clientController');
var RestaurantController = require('./api/controllers/restaurantController');
var AuthController = require('./api/controllers/authController');

//--app variables--//
var port = env.PORT || 10000;

//--middleware--//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: ''
}));
app.use(passport.initialize());
app.use(passport.session());

//--passport--//
require('./pass.js')(passport, LocalStrategy, User);

//--routes--//


//--connections--//
server.listen(port, function(){
	console.log('Listening on port: ', port);
});

mongoose.connect('mongodb://localhost/')