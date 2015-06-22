var app = angular.module('MRE');

app.controller('CustProfileCtrl', function($scope, UserService, getClient2) {

	var CP = this;

	$scope.user = getClient2;
	$scope.editUser = function(size) {
			var modalInstance = $modal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'views/EditProfileModal.html'+randStr,
				controller: 'EditProfileCtrl',
				size: size
			});

			modalInstance.result.then(function(selectedItem) {
				$scope.selected = selectedItem;
			}, function() {
				$log.info('Modal dismissed at: ' + new Date());
			})
		}
	
});