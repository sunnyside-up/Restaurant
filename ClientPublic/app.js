var app = angular.module('MRE', ['ui.router', 'ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/find-restaurant');

	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardCtrl',
			controllerAs: 'DB'
			
		})
		.state('findRestaurant', {
			url: '/find-restaurant',
			templateUrl: 'views/findRestaurant.html',
			controller: 'FindRestaurant',
			controllerAs: 'FR'
		})
		.state('reservations', {
			url: '/reservations',
			templateUrl: 'views/reservations.html',
			controller: 'ReservationsCtrl',
			controllerAs: 'RE'
		});
});
