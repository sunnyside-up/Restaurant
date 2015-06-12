(function () {
	angular.module('MRE')
		.controller('ReservationsCtrl', ['$scope', "ReservationsService",'$modal', '$log',function($scope, ReservationsService, $modal, $log){
			var RE = this;
			
 $scope.items = ['item1', 'item2', 'item3'];
  
    $scope.animationsEnabled = true;
  
    RE.open = function (size) {
  
      var modalInstance = $modal.open({
        animation: RE.animationsEnabled,
        templateUrl: 'routes/reservations/Modal/modal.html',
        controllerAs: 'REModalCtrl as REM',
        size: size,
        resolve: {
          items: function () {
            return REM.items;
          }
        }
      });

  
  // Please note that $modalInstance represents a modal window (instance) dependency.
  // It is not the same as the $modal service used above.

  
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };
  
    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };
  
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  					
			
			RE.reservations = ReservationsService.getReservations();
	 //end of controller
    });
