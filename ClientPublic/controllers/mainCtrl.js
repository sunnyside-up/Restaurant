var app = angular.module('MRE');

app.controller('MainCtrl', function($scope, $log, $modal) {
	// Fixes modal caching problem (not sure how this works)
	var randStr = '?bust=' + Math.random().toString(36).slice(2);

	$scope.animationsEnabled = true;

	$scope.openAppSettings = function(size) {
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'views/AppSettingsModal.html'+randStr,
			controller: 'AppSettingsCtrl',
			size: size
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

});
