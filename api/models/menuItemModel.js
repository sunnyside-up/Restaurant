var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs'); // required for windows users*
// if using linux or apple ios, use bcrypt
var Schema = mongoose.Schema;
var q = require('q');

var menuItemSchema = new mongoose.Schema({
	
	restaurant: [{type: Schema.Types.ObjectId, ref: 'UserRestaurant'}],

	menu: [
		{ 	category: String },
		{	items: [{ 
				name: String,
				cost: Number,
				description: String,
				photos: [{type: String}]
			}]
		}
	]

});

module.exports = mongoose.model('MenuItem', menuItemSchema);