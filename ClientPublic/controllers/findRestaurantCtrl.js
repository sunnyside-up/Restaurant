var app = angular.module('MRE');

app.controller('FindRestaurant', function($scope, RestaurantService, $location, $log, $modal, profileFromClientAppJS) {
	// var FR = this;

	console.log('profileFromClientAppJS in FindRestaurant Ctrl: ', profileFromClientAppJS);

	$scope.datas = profileFromClientAppJS;

	// FR.day = function() {
	// 	FR.dayOfWeek = RestaurantService.day();
	// }();

	// FR.daySelector = RestaurantService.daySelector;

	// FR.phoneNumberFormat = RestaurantService.phoneNumberFormat;

	// FR.restaurants = RestaurantService.restaurants;

	$scope.openRestPage = function() {
		console.log(this.data._id);
		// for(var i = 0; i < $scope.datas.length; i++){
		// 	if($scope.datas[i]._id === this.data._id){
		// 		$location.path('/restaurant/' + this.data._id);
		// 	}
		// }
	}

});