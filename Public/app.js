var app = angular.module('MRE', ['ui.router','ui.bootstrap']);


app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('profile', {
			url: '/profile',
			templateUrl: '',
			controller: 'profileCtrl'
		})
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'app/routes/dashboard/dashboard.html',
			controller: 'dashboardCtrl'

		.state('admin',{
			url: '/admin',
			templateUrl: 'app/routes/admin/admin.html',
			controller: 'adminCtrl'
		})
		.state('archive',{
			url: '/archive',
			templateUrl: 'app/routes/archive/archive.html',
			controller: 'archiveCtrl'
		});


});
