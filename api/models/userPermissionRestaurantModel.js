var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); // required for windows users*
// if using linux or apple ios, use bcrypt
var Schema = mongoose.Schema;
var q = require('q');
 
var userPermissionRestaurantSchema = new mongoose.Schema({
	
	username: { type: String, unique: true, required: true},

	password: { type: String, required: true },

	permissions: { type: String, required: true, enum: ["Admin", "Manager", "Host"]}
	

});

// used to hash password for excryption
userPermissionRestaurantSchema.pre('save', function(next) {
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
userPermissionRestaurantSchema.methods.comparePw = function(password) {
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

module.exports = mongoose.model('UserPermissionRestaurant', userPermissionRestaurantSchema);