var Restaurant = require('../models/userPermissionRestaurantModel');

module.exports = {
	create: function(req, res) {
		var newUserPermissionRestaurant = new Restaurant(req.body);
		newUserPermissionRestaurant.save(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	},

	read: function(req, res) {
		Restaurant
		.find(req.query)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	},

	update: function(req, res) {
		Restaurant.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});		
	},

	delete: function(req, res) {
		Restaurant.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				return res.send(result);
			}
		});
	}	
};