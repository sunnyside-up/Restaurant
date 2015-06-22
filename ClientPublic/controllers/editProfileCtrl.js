var app = angular.module('MRE');

app.controller('EditProfileCtrl', function($scope, $log, $modalInstance, $state, UserService, getClient) {
	
	$scope.user = getClient;

	console.log($scope.user);

	$scope.test = function() {
		console.log($scope.user.name.first);
	}

	$scope.updateProfile = function() {
		UserService.updateClient($scope.user);
	}

	$scope.reloadPage = function() {
		$state.reload();
	}

});