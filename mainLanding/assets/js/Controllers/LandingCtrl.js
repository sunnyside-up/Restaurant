var app = angular.module('MRE');

app.controller('LandingCtrl', function($scope, $log, $modal) {

	// modal for login tab
	$scope.openLoginUser = function (size) {

	    var modalInstance = $modal.open({
	      	animation: $scope.animationsEnabled,
	      	templateUrl: 'views/loginUser.html',
	      	controller: 'UserLoginCtrl',
	      	size: size
	    });

	    modalInstance.result.then(function (selectedItem) {
	      	$scope.selected = selectedItem;
	    }, function () {
	      	$log.info('Modal dismissed at: ' + new Date());
		});
	};

	// modal for login tab
	$scope.openLoginBusiness = function (size) {

	    var modalInstance = $modal.open({
	      	animation: $scope.animationsEnabled,
	      	templateUrl: 'views/loginBusiness.html',
	      	controller: 'BusinessLoginCtrl',
	      	size: size
	    });

	    modalInstance.result.then(function (selectedItem) {
	      	$scope.selected = selectedItem;
	    }, function () {
	      	$log.info('Modal dismissed at: ' + new Date());
		});
	};

	// modal for registration tab
	$scope.openRegistration = function (size) {

	    var modalInstance = $modal.open({
	      	animation: $scope.animationsEnabled,
	      	templateUrl: 'views/registration.html',
	      	controller: 'RegistrationCtrl',
	      	size: size
	    });

	    modalInstance.result.then(function (selectedItem) {
	      	$scope.selected = selectedItem;
	    }, function () {
	      	$log.info('Modal dismissed at: ' + new Date());
		});
	};

});