(function() {
    angular.module('MRE')
        .controller('AddItemCtrl', ['$scope', 'AddItemService', '$modalInstance', 'ProfileService', 'profile',
            function($scope, AddItemService, $modalInstance, ProfileService, profile) {
                var AIC = this;
                
                AIC.profile = profile;
                AIC.profileId = profile[0]._id;
                console.log(profile);
                //adding item to the menu
                AIC.addNewDrink = function(name, cost, description, photos) {
                    var profileId = AIC.profileId;
                    console.log("addItemCtrl", profileId);
                    var newDrink = {
                        name: name,
                        cost: cost,
                        description: description,
                        photos: photos
                    }
                    AddItemService.addNewDrink(newDrink, profileId).then(function(res) {
                        $modalInstance.dismiss('cancel');
                    })
                }

                AIC.addNewAppetizer = function(name, cost, description, photos) {
                    var newAppetizer = {
                        name: name,
                        cost: cost,
                        description: description,
                        photos: photos
                    }
                    AddItemService.addNewAppetizer(newAppetizer).then(function(res) {
                        $modalInstance.dismiss('cancel');
                    })
                }
            }
        ])
})();
