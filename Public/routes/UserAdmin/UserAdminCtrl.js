(function () {
	angular.module('MRE')
		.controller('UserAdminCtrl', ['$scope', "UserAdminService",'$modal', '$log',function($scope, UserAdminService, $modal, $log){
			var AC = this;
		
                 AC.users = UserAdminService.getUsers();
                 AC.users = [];
		
				 AC.usersModal = function(size) {
                    console.log('hello');
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/UserAdmin/Modal/UserModal.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'UserModalCtrl as UMC',
                        size: size
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };
		}]);	//end of controller	
})();