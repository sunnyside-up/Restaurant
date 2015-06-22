(function() { 
    angular.module('MRE')
        .controller('MenuCtrl'
            , ['$scope', 'MenuService', '$modal', '$log', 'menuItem', function($scope, MenuService, $modal, $log, menuItem) {
                var MENU = this;

                // console.log('menuItem from app.js in MenuCtrl: ', menuItem[0].menu);

                // MENU.apps = menuItem[0].menu.appetizer;
                // console.log('MENU.app from MenuCtrl: ', MENU.apps);

                // MENU.drinks = menuItem[0].menu.drink;
                // console.log('MENU.drink from MenuCtrl: ', MENU.drinks);
            
                //open modal to update restaurant
                MENU.addNewDrink = function(size) {
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/menu/template/addDrink.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'AddItemCtrl as AIC',
                        size: size,
                        resolve : {
                            profile : function(ProfileService){
                                return ProfileService.getRestaurantInfo();
                            } 
                        }
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };

                MENU.addNewAppetizer = function(size) {
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/menu/template/addAppetizer.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'AddItemCtrl as AIC',
                        size: size,
                        resolve : {
                            profile : function(ProfileService){
                                return ProfileService.getRestaurantInfo();
                            } 
                        }
                    });

                    modalInstance.result.then(function(selectedItem) {
                        $scope.selected = selectedItem;
                    }, function() {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };
            }]); //end of controller
})();
