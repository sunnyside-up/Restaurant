var app = angular.module('MRE', ['ui.router', 'ui.bootstrap', 'ngLoadScript']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/find-restaurant');

	$stateProvider
		.state('custdashboard', {
			url: '/cust-dashboard',
			templateUrl: 'views/Dashboard.html',
			controller: 'DashboardCtrl',
			controllerAs: 'DB',
			resolve: {
				getClient1: function(UserService) {
					return UserService.getClient();
				}
			}
			
		})
		.state('findRestaurant', {
			url: '/find-restaurant',
			templateUrl: 'views/FindRestaurant.html',
			controller: 'FindRestaurant',
			controllerAs: 'FR'
		})
		.state('custprofile', {
			url: '/cust-profile',
			templateUrl: 'views/Profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'CP',
			resolve: {
				getClient2: function(UserService) {
					return UserService.getClient();
				}
			}
		})
		.state('restaurant', {
			url: '/restaurant/:id',
			templateUrl: 'views/Restaurant.html',
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
				},
				getClient3: function(UserService) {
					return UserService.getClient();
				}
			}
		});
});
