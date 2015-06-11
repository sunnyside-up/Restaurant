var app = angular.module('MRE');

app.service('clientService', function($http, $q, $window) {

	this.addUser = function(user) {
		console.log("clientService: ",user);
		return	$http({
			method: 'POST',
			url: '/api/client',
			data: user
		}).then(function(response) {
			$window.location.href = '/public';
		});
	};

	this.login = function(user) {
		console.log('user in userService: ', user);
		return $http({
			method: 'POST',
			url: '/api/client/auth',
			data: user
		}).then(function(res) {
			$window.location.href = '/public'
		});
	};
	
});