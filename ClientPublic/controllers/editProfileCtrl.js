var app = angular.module('MRE');

app.controller('EditProfileCtrl', function($scope, $log, $modalInstance, DashboardService, getClient) {
	var EP = this;
	EP.user = getClient;

	console.log(EP.user);

	EP.editUserInfo = {
		name : {
			first: EP.user.name.first,
			last: EP.user.name.last
		}
		email: EP.user.email,
		phoneNumber: EP.user.phoneNumber,
		favorites: EP.user.favoriteList
	}

});