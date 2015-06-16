var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var q = require('q');

var userReservationSchema = new mongoose.Schema({
	
	resvStatus: { type: String, enum:["Pending", "Active", "Seated", "Canceled"]},
	
	businessId: { type: Number, required: true },

	resDayAndTime: { type: Date, required: true },

	resSubmitTime: { type: Date, required: true },

	guestNumber: { type: Number, required: true },

	orderCart: [
		{ type: Schema.Types.ObjectId, ref: 'MenuItem' }
	],

	creditCard: {
		cardName: String,
		cardNumber: { type: Number , required: true },
		cardExp: { type: Number , required: true }
	},

	name: {
		first: { type: String, required: true },
		last: { type: String, required: true }
	},

	phoneNumber: {type: Number, required: true },
	
	email: { type: String }

	

	

	

	
		

});



module.exports = mongoose.model('UserReservation', userReservationSchema);
