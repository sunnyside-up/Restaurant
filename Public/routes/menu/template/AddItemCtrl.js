(function() {
    angular.module('MRE')
        .controller('AddItemCtrl', ['$scope', 'AddItemService', '$modalInstance',
            function($scope, AddItemService, $modalInstance) {
                var AIC = this;
                $scope.test = "test";
                //adding item to the menu
                AIC.addMenuItem = function(category, name, cost, description, photos) {
                    var newItem = {
                        category: category,
                        items: [{
                            name: name,
                            cost: cost,
                            description: description,
                            photos: photos
                        }]
                    }

                    AddItemService.addMenuItem(newItem).then(function(res) {
                        menuItem.menu.push(newItem);
                        $modalInstance.dismiss('cancel');
                    })
                }
            }
        ])
})();
