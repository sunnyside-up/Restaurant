var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/re/reservations');

	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'views/dashboard.html',
			controllerAs: 'DashboardCtrl as DB', 
			
		})
		.state('findRestaurant', {
			url: '/find-restaurant',
			templateUrl: 'views/findRestaurant.html',
			controllerAs: 'FindRestaurant as FR'
		})
		.state('reservations', {
			url: '/reservations',
			templateUrl: 'views/reservations.html',
			controllerAs: 'ReservationsCtrl as RE'
		});
});
