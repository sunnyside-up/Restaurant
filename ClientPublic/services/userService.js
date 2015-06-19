var app = angular.module('MRE');

app.service('UserService', function($q, $http) {
	
	this.getClient = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/client'
		}).error(function(err) {
			console.log('This is the error:', err);
		}).then(function(response) {
			console.log('This is the data:', response.data);
		});
		return response.data;
	}
})