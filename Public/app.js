var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/re/reservations');

	$stateProvider 
		.state('profile', {
			url: '/re/profile',
			templateUrl: 'routes/profile/profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'PR'
			/* resolve : {    wait until we got a end point then unleash
				profile : function(ProfileService){
					return ProfileService.getRestaruantInfo();
				} 
			} */
		})
		
		.state('reservations', {
			url: '/re/reservations',
			templateUrl: 'routes/reservations/reservations.html',
			controller: 'ReservationsCtrl',
			controllerAs: 'RE'
		})


		.state('menu', {
			url: '/re/menu',
			templateUrl: 'routes/menu/menu.html',
			controller: 'MenuCtrl',
			controllerAs: 'MENU'
		})
		
		.state('userAdmin', {
			url: '/re/userAdmin',
			templateUrl: 'routes/UserAdmin/UserAdmin.html',
			controller: 'UserAdminCtrl',
			controllerAs: 'AC'
		})
});
