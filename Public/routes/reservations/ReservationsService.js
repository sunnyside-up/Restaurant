(function () {
	angular.module('MRE')
		.service('ReservationsService', ['$q', '$http', function($q, $http){
			
			this.getReservations = function(){
				var deferred = $q.defer();
				$http({
				method: 'GET',
				url: '/api/reservation'
				}).then(function(res){
					deferred.resolve(res.data) 
					var reservations = res.data;
					console.log('reservations from reservationService: ', reservations);
				});
				return deferred.promise;
			};
			
			var reservations = [];
			
			
			this.updateReservation = function(){
				return $http({
					method: 'PUT',
					url: '/api/reservation'
				}).then(function(res){
					reservations = res.data;
					console.log('PUT: res.data', res.data);
					return reservations;
				});
			};
			
		}]); //end of service
})();