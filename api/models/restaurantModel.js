var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); // required for windows users*
// if using linux or apple ios, use bcrypt
var q = require('q');

var userRestaurantSchema = new Schema({
	
	businessName: {
		type: String,
		required: true
	},

	businessEmail: {
		type: String,
		unique: true,
		required: true
	},

	password: {
		type: String,
		required: true
	},

	businessAddress: 
		{
			addressOne: String,
			addressTwo: String,
			city: String,
			state: String,
			zip: Number,

		},
	
	businessNumber: Number,

	businessDays: String,
	businessHours: Number,

	tableNumber: Number,
	capacity: Number,

	menus: [
		{
			menuCategory: String,
			menuItem: String,
			menuCost: Number
		}
	]
	

});

// used to hash password for excryption
userSchema.pre('save', function(next) {
	var user = this;
	if(!user.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(12, function(err, salt) {
		if(err) {
			return next();
		}
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) {
				return next();
			}
			user.password = hash;
			next();
		});
	});	

});

// used to compare password enter by log in user
userSchema.methods.comparePw = function(password) {
	var deferred = q.defer();
	var user = this;
	bcrypt.compare(password, user.password, function(err, res) {
		if (err) {
			deferred.resolve(err);
		} else {
			deferred.resolve(res);
		}
	})
	return deferred.promise;
};

module.exports = mongoose.model('userRestaurant', placeSchema);