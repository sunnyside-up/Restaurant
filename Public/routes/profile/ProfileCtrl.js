(function () {
	angular.module('MRE')
		.controller('ProfileCtrl', ['$scope','$modal','$log', function($scope, ProfileService, profile, $modal){
		var PR = this;
		PR.profile = profile;  //inject from profileService
	

	//open modal to update restaurant
	$scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'Public/routes/profile/template/restaurantsProfile.html',
      controller: 'ProfileCtrl',
      size: lg,
      resolve: {
        profileForm : function () {
          return $scope.;
        }
      }
    });

		}]); //end of controller
})();

//test test