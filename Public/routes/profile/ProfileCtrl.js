(function () { 
	angular.module('MRE')
		.controller('ProfileCtrl', ['$scope', 'ProfileService', '$modal','$log', function($scope, ProfileService, $modal, $log){
		var PR = this;
		//PR.profile = profile;  //inject from profileService
	


	//open modal to update restaurant
	PR.profileUpdateModal = function(size) {
    console.log('hello');
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'routes/profile/template/restaurantsProfile.html?bust=' + Math.random().toString(36).slice(2),
      controller: 'ProfileCtrl as PR',
      size: size
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  //need help on file upload, ex.which ng upload service
  //to use
  //submit function for updating profile
  //business hours not complete
  this.updateProfile = function(name, addressOne, addressTwo, city, state, zip, email, phone, businessHour, tableNumber,capactiy){
    var update = {
      businessName : name,
      businessAddress :{
        addressOne : addressOne,
        addressTwo : addressTwo,
        city : city,
        state : state,
        zip : zip
      },
      businessEmail : email,
      businessNumber : phone,
      tablePlacement : [
      {
        tableNumber : tableNumber,
        capacity : capacity
      }
      ]
    }
  }
  

		}]); //end of controller
})();

//test test