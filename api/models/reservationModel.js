var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); // required for windows users*
// if using linux or apple ios, use bcrypt
<<<<<<< HEAD
var q = require('q');

var UserReservationSchema = new mongoose.Schema({
=======
var Schema = mongoose.Schema;
var q = require('q');

var userReservationSchema = new mongoose.Schema({
>>>>>>> 3a8f2cb3c6c5ca3656a497bbd956cffb3b58e711
	
	name: {
		first: { type: String, required: true },
		last:  { type: String, required: true }
	},
<<<<<<< HEAD
	
	email: { type: String, required: true, unique: true	},

	time: { type: Number, required: true },
=======

	guestNumber: { type: Number, required: true },
	
	email: { type: String, required: true, unique: true	},

	resvSch: [{
		resvDate: { type: Date, required: true},
		time: { type: Number, required: true }
	}],
>>>>>>> 3a8f2cb3c6c5ca3656a497bbd956cffb3b58e711

	phoneNumber: {type: Number, required: true },

	creditCard: [
		{ 
			cardName: String,
			cardNumber: { type: Number , required: true, unique: true},
			cardExp: { type: Number , required: true, unique: true}
		}
	],
<<<<<<< HEAD
=======

	orderCart: [{type: Schema.Types.ObjectId, ref: 'MenuItem'}]
>>>>>>> 3a8f2cb3c6c5ca3656a497bbd956cffb3b58e711
		

});



<<<<<<< HEAD
module.exports = mongoose.model('UserReservation', userClientSchema);
=======
module.exports = mongoose.model('UserReservation', userReservationSchema);
>>>>>>> 3a8f2cb3c6c5ca3656a497bbd956cffb3b58e711
