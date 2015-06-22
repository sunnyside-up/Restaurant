(function() {
	var app = angular.module('MRE');

	app.controller('CustProfileCtrl', function($scope, UserService, getClient2, $modal, $log) {

		var CP = this;

		var randStr = '?bust=' + Math.random().toString(36).slice(2);


		console.log(getClient2);

		CP.user = getClient2;

		console.log(CP.user);

		CP.editUser = function(size) {
				var modalInstance = $modal.open({
					animation: $scope.animationsEnabled,
					templateUrl: 'views/EditProfileModal.html'+randStr,
					controller: 'EditProfileCtrl',
					resolve: {
						getClient: function() {
							return getClient2;
						}
					},
					size: size
				});

				modalInstance.result.then(function(selectedItem) {
					$scope.selected = selectedItem;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				})
			}
		
	});
})();