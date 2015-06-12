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
			templateUrl: 'views/FindRestaurant.html',
			controller: 'FindRestaurant',
			controllerAs: 'FR'
		})
		.state('restaurant', {
			url: '/restaurant/:id',
			templateUrl: 'views/restaurant.html',
			controller: 'RestaurantCtrl',
			controllerAs: 'RE',
			resolve: {
				getRestById: function($stateParams, RestaurantService) {
					console.log(parseInt($stateParams.id));
					for(var i = 0; i < RestaurantService.restaurants.length; i++) {
						console.log(RestaurantService.restaurants[i].businessId + " " + parseInt($stateParams.id));
						if(RestaurantService.restaurants[i].businessId === parseInt($stateParams.id)) {
							console.log("Match Found.");
							var obj = RestaurantService.restaurants[i];
							return obj;
							break;
						}
					}
				}
			}
		});
});
