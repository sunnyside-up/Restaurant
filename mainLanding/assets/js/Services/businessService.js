var app = angular.module('MRE');

app.service('businessService', function($http, $q, $window) {

	this.addUser = function(user) {
		console.log("businessService: ",user);

		user.businessEmail = user.email;
		delete user.email;
		console.log("after businessService change: ",user);

		return $http({
			method: 'POST',
			url: '/api/restaurant',
			data: user
		}).then(function(response) {
			$window.location.href = '/re';
		});
	};

	this.login = function(user) {
		console.log('user in businessService: ', user);

		return $http({
			method: 'POST',
			url: '/api/restaurant/auth',
			data: user
		}).then(function(res) {
			$window.location.href = '/re';
		});
	};

});