var app = angular.module('MRE');

app.controller('LandingCtrl', function($scope, $log, $modal) {

	var randStr = '?bust=' + Math.random().toString(36).slice(2);

	// modal for user login tab
	$scope.openLoginUser = function (size) {

	    var modalInstance = $modal.open({
	      	animation: $scope.animationsEnabled,
	      	templateUrl: 'views/loginUser.html'+randStr,
	      	controller: 'UserLoginCtrl',
	      	size: size
	    });

	    modalInstance.result.then(function (selectedItem) {
	      	$scope.selected = selectedItem;
	    }, function () {
	      	$log.info('Modal dismissed at: ' + new Date());
		});
	};

	// modal for business login tab
	$scope.openLoginBusiness = function (size) {

	    var modalInstance = $modal.open({
	      	animation: $scope.animationsEnabled,
	      	templateUrl: 'views/loginBusiness.html'+randStr,
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
	      	templateUrl: 'views/registration.html'+randStr,
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