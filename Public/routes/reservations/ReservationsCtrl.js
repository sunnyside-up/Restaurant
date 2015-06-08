(function () {
	angular.module('MRE')
		.controller('ReservationsCtrl', ['$scope', "ReservationsService",function($scope, ReservationsService){
			var RE = this;
			
			RE.reservations = [ 
			{reservation: "the best"},
			{reservation: "what the heck"},
			{reservation:"just work"},
			{reservation: "the best2"},
			{reservation: "what the heck2"},
			{reservation:"just work2"},
			{reservation: "the best3"},
			{reservation: "what the heck3"},
			{reservation:"just work3"}
			]
			
			
//			RE.reservations = ReservationsService.getReservations();
		}]); //end of controller
})();