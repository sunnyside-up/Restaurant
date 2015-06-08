var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); // required for windows users*
// if using linux or apple ios, use bcrypt
var q = require('q');

var UserReservationSchema = new mongoose.Schema({
	
	name: {
		first: { type: String, required: true },
		last:  { type: String, required: true }
	},
	
	email: { type: String, required: true, unique: true	},

	time: { type: Number, required: true },

	phoneNumber: {type: Number, required: true },

	creditCard: [
		{ 
			cardName: String,
			cardNumber: { type: Number , required: true, unique: true},
			cardExp: { type: Number , required: true, unique: true}
		}
	],
		

});



module.exports = mongoose.model('UserReservation', userClientSchema);