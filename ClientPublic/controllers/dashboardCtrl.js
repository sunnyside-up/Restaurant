var app = angular.module('MRE');

app.controller('CustDashboardCtrl', function($scope, UserService, getClient1) {
	
	var CD = this;
	
	this.user = getClient1;

});