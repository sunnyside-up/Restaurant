var app = angular.module('MRE', ['ui.router', 'ui.bootstrap', 'ngLoadScript']);

app.config(function($stateProvider, $urlRouterProvider){

	// $urlRouterProvider.otherwise('/find-restaurant');

	$stateProvider
		.state('custdashboard', {
			url: '/cust-dashboard',
			templateUrl: 'views/Dashboard.html',
			controller: 'CustDashboardCtrl',
			controllerAs: 'CD',
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
			controllerAs: 'FR',
			resolve : {    
				profileFromClientAppJS : function(RestaurantService){
					return RestaurantService.getRestaurantInfo();
				} 
			} 
		})

		.state('custprofile', {
			url: '/cust-profile',
			templateUrl: 'views/Profile.html',
			controller: 'CustProfileCtrl',
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
			resolve: {
				getRestById: function($stateParams, RestaurantService) {
					console.log('$stateParams in app.js client side', $stateParams.id);
					return RestaurantService.getRestaurantById($stateParams.id);
				}
			}
		})
});
