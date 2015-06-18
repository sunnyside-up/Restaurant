(function() {
    angular.module('MRE')
        .controller('AddItemCtrl', ['$scope', 'AddItemService', '$modalInstance', 'ProfileService', 'profile',
            function($scope, AddItemService, $modalInstance, ProfileService, profile) {
                var AIC = this;
                $scope.test = "test";
                console.log(profile);
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
                        profile[0].menuItem.push(newItem);
                        $modalInstance.dismiss('cancel');
                    })
                }
            }
        ])
})();
