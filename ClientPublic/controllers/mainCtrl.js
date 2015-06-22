var app = angular.module('MRE');

app.controller('MainCtrl', function($scope, $log, $modal, $location, UserService) {
	
	var randStr = '?bust=' + Math.random().toString(36).slice(2); // Fixes modal caching problem (not sure how this works)

	$scope.animationsEnabled = true;

	$scope.mainMenu = {
		profile: function() {
			$location.path('/cust-profile');
		},
		search: function() {
			$location.path('/find-restaurant');
		},
		dashboard: function() {
			$location.path('/cust-dashboard');
		}
	};

});
