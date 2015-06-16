var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/re/reservations');

	$stateProvider 
		.state('profile', {
			url: '/profile',
			templateUrl: 'routes/profile/profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'PR',
			resolve : {    
				profile : function(ProfileService){
					return ProfileService.getRestaruantInfo();
				} 
			} 
		})
		
		.state('reservations', {
			url: '/reservations',
			templateUrl: 'routes/reservations/reservations.html',
			controller: 'ReservationsCtrl',
			controllerAs: 'RE'
		})


		.state('menu', {
			url: '/menu',
			templateUrl: 'routes/menu/menu.html',
			controller: 'MenuCtrl',
			controllerAs: 'MENU'
		})
});
