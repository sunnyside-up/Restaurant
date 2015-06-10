var app = angular.module('MRE');

app.controller('UserLoginCtrl', function($scope, $log, $modalInstance) {

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});