var app = angular.module('MRE');

app.controller('BusinessLoginCtrl', function($scope, $log, $modalInstance, $location, businessService) {

	$scope.login = function() {
		console.log('$scope.user: ', $scope.Business);
		businessService.login($scope.Business).then(function(res) {
			console.log('Logged in');
<<<<<<< HEAD
			// $location.path('/re');
=======
>>>>>>> 75aca4cf2ceb0be9c502f47362aab0c71e7c1cb1
		}).catch(function(err) {
			console.log('err from login: ', err);
		});
	};


	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});