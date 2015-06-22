var app = angular.module('MRE');

app.service('UserService', function($q, $http) {
	
	this.getClient = function() {
		var dfd = $q.defer();
		console.log('Step 1: Get Request');
		$http({
			method: 'GET',
			url: '/api/client'
		}).then(function(response) {
			console.log('Step 2: The Data:', response.data);
			dfd.resolve(response.data[0]);
		});
		return dfd.promise;
	}

	this.updateClient = function(obj) {
		var dfd = $q.defer();
		console.log('Step 1: Put Request');
		$http({
			method: 'PUT',
			url: '/api/client',
			data: obj
		}).then(function(response) {
			console.log('Step 2: The Data:', response.data);
			dfd.resolve(response.data[0]);
		});
		return dfd.promise;
	}
    
});
