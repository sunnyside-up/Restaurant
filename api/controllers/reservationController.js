var Reservation = require('../models/reservationModel');

module.exports = {
	create: function(req, res) {
		var newReservation = new Reservation(req.body);
		newReservation.save(function(err, result) {
			if (err) {
				return res.status(500).res.send(err);
			} else {
				return res.send(result);
			}
		});
	},

	read: function(req, res) {
		Reservation
		.find(req.query)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).res.send(err);
			} else {
				return res.send(result);
			}
		});
	},

	status: function(req, res) {
		Reservation
		.find(req.query)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).res.send(err);
			} else {
				return res.send(result);
			}
		});
	},

	update: function(req, res) {
		Reservation.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).res.send(err);
			} else {
				return res.send(result);
			}
		});		
	},

	delete: function(req, res) {
		Reservation.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).res.send(err);
			} else {
				return res.send(result);
			}
		});
	}	
};