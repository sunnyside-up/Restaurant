var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider 
		.state('profile', {
			url: '/re/profile',
			templateUrl: 'routes/profile/profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'PR'
			/* resolve : {    wait until we got a end point then unleash
				profile : function(ProfileService){
					return ProfileService.getRestaurantInfo();
				} 
			} */
		})
		
		.state('reservations', {
			url: '/re/reservations',
			templateUrl: 'routes/reservations/reservations.html',
			controller: 'ReservationsCtrl',
			controllerAs: 'RE',
			resolve: {
				restaurant: function(ReservationsService){
					ReservationsService.getReservations();
				}
			}
		})


		.state('menu', {
			url: '/re/menu',
			templateUrl: 'routes/menu/menu.html',
			controller: 'MenuCtrl',
			controllerAs: 'MENU'
		})


		// $urlRouterProvider.otherwise(window.location.href = '/')
});
