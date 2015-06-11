var app = angular.module('MRE');

app.controller('UserLoginCtrl', function($scope, $log, $modalInstance, $location, clientService) {

	$scope.login = function() {
		console.log('$scope.user: ', $scope.User);
		clientService.login($scope.User).then(function(res) {
			console.log('Logged in');
			$location.path('/public');
		}).catch(function(err) {
			console.log('err from login: ', err);
		});;
	};


	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});