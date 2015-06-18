(function() { 
    angular.module('MRE')
        .controller('MenuCtrl'
            , ['$scope', 'MenuService', '$modal', '$log', function($scope, MenuService, $modal, $log) {
                var MENU = this;

                this.getMenuInfo = function() {
                    MenuService.getMenuInfo().then(function(data) {
                        MENU.menuInfo = data
                    })
                }

                //open modal to update restaurant
                MENU.addItemModal = function(size) {
                    console.log('hello');
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/menu/template/addItem.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'AddItemCtrl as AIC',
                        size: size
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };
            }]); //end of controller
})();
