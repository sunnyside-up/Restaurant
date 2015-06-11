var app = angular.module('MRE');

app.controller('AboutUsCtrl', function($scope, $log, $modalInstance) {

	var d = new Date();
	var n = d.getFullYear();

	$scope.getYear = n;
	
	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};

});