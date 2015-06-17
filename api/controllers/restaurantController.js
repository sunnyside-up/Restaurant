var Restaurant = require('../models/restaurantModel');

module.exports = {
	create: function(req, res) {
		var newRestaurant = new Restaurant(req.body);
		newRestaurant.save(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	},

	read: function(req, res) {
		console.log('restaurantController: ', req.user);
		Restaurant
		.find(req.user._id)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	},

	update: function(req, res) {
		Restaurant.findByIdAndUpdate(req.user._id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});		
	},

	delete: function(req, res) {
		Restaurant.findBy_idAndRemove(req.userrestaurants.id, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	}	
};