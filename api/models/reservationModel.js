var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); // required for windows users*
// if using linux or apple ios, use bcrypt
var Schema = mongoose.Schema;
var q = require('q');

var userReservationSchema = new mongoose.Schema({
	
	name: {
		first: { type: String, required: true },
		last:  { type: String, required: true }
	},

	guestNumber: { type: Number, required: true },
	
	email: { type: String, required: true, unique: true	},

	resvSch: [{
		resvDate: { type: Date, required: true},
		time: { type: Number, required: true }
	}],

	phoneNumber: {type: Number, required: true },

	creditCard: [
		{ 
			cardName: String,
			cardNumber: { type: Number , required: true, unique: true},
			cardExp: { type: Number , required: true, unique: true}
		}
	],

	orderCart: [{type: Schema.Types.ObjectId, ref: 'MenuItem'}]
		

});



module.exports = mongoose.model('UserReservation', userReservationSchema);