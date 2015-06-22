var app = angular.module('MRE');

app.controller('DashboardCtrl', function($scope, UserService, getClient1) {
	var DB = this;
	this.user = getClient1;

});