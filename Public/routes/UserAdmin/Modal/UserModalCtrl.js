(function () {
	angular.module('MRE')
		.controller('UserModalCtrl', ['$scope', "UserAdminService",'$modal', '$log',function($scope, UserAdminService, $modal, $log){
			var UMC = this;
                  
                   UMC.addUser = UserAdminService.addUser();
                
		
      
      
      
    }]);
})();