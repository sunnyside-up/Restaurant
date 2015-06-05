(function () {
	angular.module('MRE')
		.service('MenuService', ['$q', '$http', function($q, $http){

		this.getMenuInfo = function() {
			var deferred = $q.defer();
			$http({
				method : 'GET',
				url :      //need endpoint here
			}).then(function(response){
				deferred.resolve(response.data)
			})
				return deferred.promise;
		} 



	}]) // end of service
}) 