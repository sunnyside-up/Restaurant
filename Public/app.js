var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/re/reservations');

	$stateProvider
		.state('profile', {
			url: '/re/profile',
			templateUrl: 'routes/profile/profile.html',
			controllerAs: 'ProfileCtrl as PR'
			/* resolve : {    wait until we got a end point then unleash
				profile : function(ProfileService){
					return ProfileService.getRestaruantInfo();
				} 
			} */
			
		})
		
		.state('reservations', {
			url: '/re/reservations',
			templateUrl: 'routes/reservations/reservations.html',
			controllerAs: 'ReservationsCtrl as RE'
		});
});
