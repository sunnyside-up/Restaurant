var app = angular.module('MRE');

app.controller('FindRestaurant', function($scope, RestaurantService, $location, $log, $modal) {
	var FR = this;

	FR.day = function() {
		FR.dayOfWeek = RestaurantService.day();
	}();

	FR.daySelector = RestaurantService.daySelector;

	FR.phoneNumberFormat = RestaurantService.phoneNumberFormat;

	FR.restaurants = RestaurantService.restaurants;

	$scope.openRestPage = function() {
		console.log(this.obj.businessId);
		for(var i = 0; i < FR.restaurants.length; i++){
			if(FR.restaurants[i].businessId === this.obj.businessId){
				$location.path('/restaurant/' + this.obj.businessId);
			}
		}
	}

});