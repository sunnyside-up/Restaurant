(function() {
    angular.module('MRE')
        .controller('AddItemCtrl', ['$scope', 'AddItemService', '$modalInstance', 'ProfileService', 'profile',
            function($scope, AddItemService, $modalInstance, ProfileService, profile) {
                var AIC = this;
                $scope.test = "test";
                console.log(profile);
                //adding item to the menu
                AIC.addMenuItem = function(name, cost, description, photos) {
                    var newDrink = {
                                name: name,
                                cost: cost,
                                description: description,
                                photos: photos 
                    }
                    

                    AddItemService.addMenuItem(newDrink).then(function(res) {
                        $modalInstance.dismiss('cancel');
                    })
                }
            }
        ])
})();
