(function () {
	angular.module('MRE')
		.controller('ReservationModalCtrl', ['$scope', "ReservationsService",'$modal', '$log',function($scope, ReservationsService, $modal, $log){
			var RMC = this;
                  
                   RMC.reservations = ReservationsService.getReservations();
                 RMC.reservations = [];
		
      
      
      
    }]);
})();