var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); // required for windows users*
// if using linux or apple ios, use bcrypt
var Schema = mongoose.Schema;
var q = require('q');

var userClientSchema = new mongoose.Schema({
	
	name: {
		first: { type: String, required: true },
		last:  { type: String, required: true }
	},
	
	email: { type: String, required: true, unique: true	},

	password: { type: String, required: true },

	phoneNumber: Number,

	creditCard: [
		{ 
			cardName: String,
			cardNumber: { type: Number , required: true, unique: true},
			cardExp: { type: Number , required: true, unique: true}
		}
	],
		

	favoriteList: [{type: Schema.Types.ObjectId, ref: 'UserRestaurant'}]

});

// used to hash password for excryption
userClientSchema.pre('save', function(next) {
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
userClientSchema.methods.comparePw = function(password) {
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

module.exports = mongoose.model('UserClient', userClientSchema);