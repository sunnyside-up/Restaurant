var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider 
		.state('profile', {
			url: '/profile',
			templateUrl: 'routes/profile/profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'PR',
			resolve : {    
				profile : function(ProfileService){
					return ProfileService.getRestaurantInfo();
				} 
			} 
		})
		
		.state('reservations', {
			url: '/reservations',
			templateUrl: 'routes/reservations/reservations.html',
			controller: 'ReservationsCtrl',
			controllerAs: 'RE',
			resolve: {
				restaurant: function(ReservationsService){
					return ReservationsService.getReservations();
				}
			}
		})


		.state('menu', {
			url: '/menu',
			templateUrl: 'routes/menu/menu.html',
			controller: 'MenuCtrl',
			controllerAs: 'MENU',
			resolve : {
				menuItem : function(MenuService){
					return MenuService.getMenuInfo();
				}
			}
		})

		
		.state('userAdmin', {
			url: '/re/userAdmin',
			templateUrl: 'routes/UserAdmin/UserAdmin.html',
			controller: 'UserAdminCtrl',
			controllerAs: 'AC'
		})



		// $urlRouterProvider.otherwise(window.location.href = '/')

});
