var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var q = require('q');

var menuItemSchema = new Schema({
	
	restaurant: [{type: Schema.Types.ObjectId, ref: 'UserClient'}],
	menu: {
			drink : [{ 
				name: String,
				cost: Number,
				description: String,
				photos: [{type: String}]
			}],

			appetizer : [{
				name: String,
				cost: Number,
				description: String,
				photos: [{type: String}]
			}]
		}
});

module.exports = mongoose.model('MenuItem', menuItemSchema);