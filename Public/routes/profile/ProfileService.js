//ProfileService.js


(function () {
	angular.module('MRE')
		.service('ProfileService', ['$q', '$http', function($q, $http){

		//get restaruant info for profile page
		this.getRestaruantInfo = function() {
			var deferred = $q.defer();
			$http({
				method : 'GET',
				url :          //need endpoint here
			}).then(function(response){
				deferred.resolve(response.data)
			})
				return deferred.promise;
		}

		}]); //end of service
		}
})();

//test test