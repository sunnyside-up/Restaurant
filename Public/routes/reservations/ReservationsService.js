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
			
		}]); //end of service
})();