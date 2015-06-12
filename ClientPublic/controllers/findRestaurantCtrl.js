var app = angular.module('MRE');

app.controller('FindRestaurant', function($scope, FindRestaurantService) {
	var FR = this;

	FR.day = function() {
		var date = new Date();
		var day = date.getDay();
		var dayArr = [
			"Sunday", 
			"Monday", 
			"Tuesday", 
			"Wednesday", 
			"Thursday", 
			"Friday", 
			"Saturday"];
		FR.dayOfWeek = dayArr[day]
	}()

	FR.daySelector = function(today, schedule) {
		if(schedule[0].hasOwnProperty(today)) {
			FR.today = schedule[0][today]
		}
	}

	FR.phoneNumberFormat = function(number) {
		number = number.toString().split('')
		var beginning = number.slice(0, 3)
		var middle = number.slice(3, 6)
		var end = number.slice(6, 10)
		return "(" + beginning.join('') + ") " + middle.join('') + " - " + end.join('');
	}

	FR.restaurants = FindRestaurantService.restaurants;

});