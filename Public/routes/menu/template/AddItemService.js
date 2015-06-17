(function() {
    angular.module('MRE')
        .service('AddItemService', ['$q', '$http', function($q, $http) {
        	this.addMenuItem = function(newItem) {
        		var deferred = $q.defer();
        		console.log(newItem);
        		$http({
        			method : 'POST',
        			url : '/api/menu',
        			data : newItem
        		}).then(function(response){
        			deferred.resolve(response.data)
        		})
        			return deferred.promise;
        }
    }]); //end of service
})();
