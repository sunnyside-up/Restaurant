<<<<<<< HEAD
var app = angular.module('MRE', ['ui.router', 'ui.bootstrap']);
=======
var app = angular.module('MRE', ['ui.router', 'ui.bootstrap', 'ngLoadScript']);
>>>>>>> 3a8f2cb3c6c5ca3656a497bbd956cffb3b58e711


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
