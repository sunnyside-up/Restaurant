var app = angular.module('MRE');

app.controller('RegistrationCtrl', function($scope, $log, $modalInstance) {

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});