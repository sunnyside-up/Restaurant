var app = angular.module('MRE');

app.controller('ProfileCtrl', function($scope, getUserById) {
	
	console.log('getUserID in Client profileCtrl: ',getUserById[0]);
	
});