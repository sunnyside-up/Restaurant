var app = angular.module('MRE');

app.service('ReservationService', function($q, $http) {
	
	this.getDayClass = function(date, mode) {
		if (mode === 'day') {
		  var dayToCheck = new Date(date).setHours(0,0,0,0);

		  for (var i=0;i<$scope.events.length;i++){
		    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

		    if (dayToCheck === currentDay) {
		      return $scope.events[i].status;
		    }
		  }
		}
		return '';
	};

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
	};
})