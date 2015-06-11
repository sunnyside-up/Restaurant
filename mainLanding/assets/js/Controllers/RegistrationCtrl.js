var app = angular.module('MRE');

app.controller('RegistrationCtrl', function($scope, $log, $modalInstance, $location, clientService, businessService) {

	

	// button to submit new user
	$scope.addNewUser = function() {
		if ($scope.newUser.password != $scope.newUser.confirmPassword) {
			console.log('Password does not match');
			return;
		}

		if ($scope.newUser.options === 'client') {
			clientService.addUser($scope.newUser).then(function(user) {
				console.log('User Registration Success');
			})
		} else if ($scope.newUser.options === 'business') {
			businessService.addUser($scope.newUser).then(function(user) {
				console.log('Business Registration Success');
			})
		} else {
			console.log("Please choose either a User or Business Profile.")
		}
	};


	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});