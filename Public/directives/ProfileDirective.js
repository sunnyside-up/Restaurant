var app = angular.module('MRE');

app.directive('ProfileModal', function(){
	return {
		restrict: 'E',
		templateUrl: '../routes/profile/template/restaurantsProfile.html'
	}
})

app.directive('RestaurantInfo', function(){
	return {
		restrict: 'E',
		templateUrl: '../routes/profile/template/restaurantsInfo.html'
	}
})