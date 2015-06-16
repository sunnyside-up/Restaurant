var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var q = require('q');

var userReservationSchema = new mongoose.Schema({
	
	name: [{type: Schema.Types.ObjectId, ref: 'UserClient'}],

	guestNumber: { type: Number, required: true },
	
	email: [{type: Schema.Types.ObjectId, ref: 'UserClient'}],

	resvDate: { type: Date, required: true}

	phoneNumber: {type: Number, required: true },

	creditCard: [
		{ 
			cardName: String,
			cardNumber: { type: Number , required: true, unique: true},
			cardExp: { type: Number , required: true, unique: true}
		}
	],

	resvStatus: { type: String, enum:["Active", "Seated", "Canceled"]},

	orderCart: [{type: Schema.Types.ObjectId, ref: 'MenuItem'}]
		

});



module.exports = mongoose.model('UserReservation', userReservationSchema);
