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

                //adding item to the menu
                this.addMenuItem = function(category, name, cost, description, photos) {
                    var newItem = {
                        category: category,
                        items: [{
                            name: name,
                            cost: cost,
                            description: description,
                            photos: photos
                        }]
                    }
                    
                    MenuService.addMenuItem(newItem).then(function(res) {
                        userRestaurant.menu.push(newItem);
                        MENU.category = '';
                        MENU.name = '';
                        MENU.cost = 0;
                        MENU.description = '';
                        MENU.photos = '';
                    })
                }

                //open modal to update restaurant
                MENU.addItemModal = function(size) {
                    console.log('hello');
                    var modalInstance = $modal.open({
                        animation: $scope.animationsEnabled,
                        templateUrl: 'routes/menu/template/addItem.html?bust=' + Math.random().toString(36).slice(2),
                        controller: 'MenuCtrl as MENU',
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
