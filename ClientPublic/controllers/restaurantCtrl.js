var app = angular.module('MRE');

app.controller('RestaurantCtrl', function($scope, getRestById, RestaurantService) {
	var RE = this;

	$scope.thisRest = getRestById;

	RE.day = function() {
		RE.dayOfWeek = RestaurantService.day();
	}();

	RE.daySelector = RestaurantService.daySelector;

	RE.phoneNumberFormat = RestaurantService.phoneNumberFormat;

})