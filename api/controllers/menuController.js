var Menu = require('../models/menuItemModel');

module.exports = {
	addDrink: function(req, res) {
		// console.log('menu controller', req.body)
		console.log('menu conroller req.user', req.user);
		// go look in mongo and see if Menu exists for restaurant 
		Menu.findOne({ restaurant: req.user._id}, function(err, menu){
			console.log(menu);

				var newMenu = new Menu();
				newMenu.restaurant = req.user._id;
				console.log("from menu controller",req.body)
				newMenu.menu.drink.push(req.body);
				console.log('newmenu', newMenu);
				newMenu.save(function(err, result) {
					if (err) {
						return res.status(500).send(err);
					} else {
						return res.send(result);
					}
				});
			
		})
	},

	addAppetizer: function(req, res) {
		console.log('menu controller', req.body)
		// go look in mongo and see if Menu exists for restaurant 
		Menu.findOne({ restaurant: req.user._id}, function(err, menu){
			if(!menu){
				var newMenu = new Menu();
				newMenu.restaurant = req.user._id;
				newMenu.menu.appetizer.push(req.body);
				newMenu.save(function(err, result) {
					if (err) {
						return res.status(500).send(err);
					} else {
						return res.send(result);
					}
				});
			} 
		})
	},
	
	read: function(req, res) {
		Menu
		.find({'restaurant': req.user._id})
		.exec()
		.then(function(result) {
			res.status(200).json(result);
			}, function(err) {
			res.status(500).json(err);
		})
	},

	update: function(req, res) {
		Menu.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) {
				return res.status(500).res.send(err);
			} else {
				return res.send(result);
			}
		});		
	},

	delete: function(req, res) {
		Menu.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) {
				return res.status(500).res.send(err);
			} else {
				return res.send(result);
			}
		});
	}	
};