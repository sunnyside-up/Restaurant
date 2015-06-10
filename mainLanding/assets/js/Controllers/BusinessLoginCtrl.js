var app = angular.module('MRE');

app.controller('BusinessLoginCtrl', function($scope, $log, $modalInstance) {

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});