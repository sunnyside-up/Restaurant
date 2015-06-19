var app = angular.module('MRE');

app.controller('ProfileCtrl', function($scope, getUserById) {
	
	$scope.user = getUserById;
	
});