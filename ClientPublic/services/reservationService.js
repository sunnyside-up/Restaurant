var app = angular.module('MRE');

app.service('ReservationService', function($q, $http) {
	
	this.submitRes = function(obj) {
		var dfd = $q.defer();
		console.log(obj);
		return $http({
			method: 'POST',
			url: '/api/reservation',
			data: obj
		}).then(function(response) {
			console.log(response);
		})
	}
})