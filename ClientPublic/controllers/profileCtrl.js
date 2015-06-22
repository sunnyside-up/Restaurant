var app = angular.module('MRE');

app.controller('ProfileCtrl', function($scope, UserService, getClient2) {
	
	$scope.user = getClient2;
	
});