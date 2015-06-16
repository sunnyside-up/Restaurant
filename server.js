//--node_modules--//
var express = require('express');
var app = express();

var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

//--internal modules--//
var env = require('./.envVar');
// var User = require('./models/userModel');
var ClientController = require('./api/controllers/clientController');
var RestaurantController = require('./api/controllers/restaurantController');
var AuthController = require('./api/controllers/authController');
var MenuController = require('./api/controllers/menuController');
var ReservationController = require('./api/controllers/reservationController');
var UserPermissionRestaurantController = require('./api/controllers/userPermissionRestaurantController');

//--server side model--//
var ClientUser = require('./api/models/clientModel');
var RestaurantUser = require('./api/models/restaurantModel');

//--app variables--//
var port = env.PORT || 10000;
var mongoUri = 'mongodb://localhost:27017/mre';

//--middleware--//
app.use('/re', express.static(__dirname+'/Public'));
app.use('/public', express.static(__dirname+'/ClientPublic'));
app.use('/auth', express.static(__dirname+'/authPublic'));
app.use('/', express.static(__dirname+'/mainLanding'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'oursecrettext'//env.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

//--passport--//
// require('./pass.js')(passport, LocalStrategy, User);
// local strategy for passport
passport.use(new LocalStrategy({
	usernameField: 'email'
}, function(email, password, done) {
	//define how we match user credentials to db values
	User.findOne({ email: email }, function(err, user){
		if (!user) {
			done(new Error("This user does not exist"));
		}
		user.comparePw(password).then(function(doesMatch) {
			console.log('password match: ', doesMatch);
			if (doesMatch) {
				console.log('user in localStrategy: ', user);
				done(null, user);
			}
			else {
				done(new Error("Please verify your password and try again"));
			}
		});
	});
}));
// establishing passport serializer and deserializer
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// prevents unauthorization access to after login pages
var requireAuth = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(401).end();
	}
	console.log(req.user);
	next();
};

//--routes--//
// create user end-point
app.post('/api/client', ClientController.create);
app.post('/api/restaurant', RestaurantController.create);
// login endpoint
app.post('/api/client/auth', passport.authenticate('local', { failureRedirect: '/' }), function(req, res) {
	res.status(200).end();
});
app.post('/api/restaurant/auth', passport.authenticate('local', { failureRedirect: '/' }), function(req, res) {
	res.status(200).end();
});
// log out endpoints
app.get('/api/auth/logout', function(req, res) {
	req.logout();
	return res.redirect('/');
});
// restaurant endpoint
app.get('/api/restaurant', requireAuth, RestaurantController.read);
app.put('/api/restaurant/update', requireAuth, RestaurantController.update);
app.delete('/api/restaurant/delete', requireAuth, RestaurantController.delete);
// client endpoint
app.get('/api/client', requireAuth, ClientController.read);
app.put('/api/client/:id', requireAuth, ClientController.update);
app.delete('/api/client/:id', requireAuth, ClientController.delete);
// menu endpoint
app.post('/api/menu', requireAuth, MenuController.create);
app.get('/api/menu', requireAuth, MenuController.read);
app.put('/api/menu/:id', requireAuth, MenuController.update);
app.delete('/api/menu/:id', requireAuth, MenuController.delete);
// reservation endpoint
app.post('/api/reservation', requireAuth, ReservationController.create);
app.get('/api/reservation', requireAuth, ReservationController.read);
app.put('/api/reservation/:id', requireAuth, ReservationController.update);
app.delete('/api/reservation/:id', requireAuth, ReservationController.delete);
// restaurant user permission endpoint
app.post('/api/user', requireAuth, UserPermissionRestaurantController.create);
app.get('/api/user', requireAuth, UserPermissionRestaurantController.read);
app.put('/api/user/:id', requireAuth, UserPermissionRestaurantController.update);
app.delete('/api/user/:id', requireAuth, UserPermissionRestaurantController.delete);



//--connections--//
server.listen(port, function(){
	console.log('Listening on port: ', port);
});

// connecting mongoose
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Engaging mongoBD at: ', mongoUri)
});