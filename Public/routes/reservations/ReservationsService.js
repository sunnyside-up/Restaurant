(function () {
	angular.module('MRE')
		.service('ReservationsService', ['$q', '$http', function($q, $http){
			
			this.getReservations = function(){
				return $http({
				method: 'GET',
				url:'/re/Reservations'
				}).then(function(res){
					reservations = res.data;
					return reservations;
				});
				};
			
			var reservations = []
			
		}]); //end of service
})();