(function () {
	angular.module('MRE')
		.controller('ReservationsCtrl', ['$scope', "ReservationsService",function($scope, ReservationsService){
			var RE = this;
			
			RE.reservations = [
				{
					"name" : "Bob the Builder",
					"email" : "Wecanfixit@gmail.com",
					"time" : 11,
					"phoneNumber" : "409-495-8273",
					"creditCard" : [ 	
						{
						"cardName" : "visa",
						"cardNumber" : "8950039493049304",
						"cardExp" : "08/17"
						}
					]
				},
				{
					"name" : "ivanna Reservati",
					"email" : "rightNow@hotmail.com",
					"time" : 8,
					"phoneNumber" : "394-039-2849",
					"creditCard" : [ 	
						{
						"cardName" : "master card",
						"cardNumber" : "7485948374857483",
						"cardExp" : "09/18"
						}
					]
				},
				{
					"name" : "paula mifinga",
					"email" : "sillyname@aol.com",
					"time" : 10,
					"phoneNumber" : "854-392-4859",
					"creditCard" : [ 	
						{
						"cardName" : "american express",
						"cardNumber" : "8495938495743454",
						"cardExp" : "06/14"
						}
					]
				}
			];
						
			
//			RE.reservations = ReservationsService.getReservations();
		}]); //end of controller
})();