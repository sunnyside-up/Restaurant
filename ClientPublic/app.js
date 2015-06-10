var app = angular.module('MRE', ['ui.router', 'ui.bootstrap', 'ngLoadScript']);


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
		.state('restaurant', {
			url: '/restaurant',
			templateUrl: 'views/restaurant.html',
			controller: 'RestaurantCtrl',
			controllerAs: 'RE'
		});
});
