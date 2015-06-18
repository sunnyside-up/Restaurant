(function () {
	angular.module('MRE')
		.service('ReservationsService', ['$q', '$http', function($q, $http){
			
			this.getReservations = function(){
				$http({
				method: 'GET',
				url: '/api/reservation'
				}).then(function(res){
					reservations = res.data;
					console.log('res.data:', res.data);
					return reservations;
				});
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