(function () {
	angular.module('MRE')
		.service('UserAdminService', ['$q', '$http', function($q, $http){
			
			this.getUsers = function(){
				return $http({
				method: 'GET',
				url:'/api/reservation'
				}).then(function(res){
					users = res.data;
					console.log('res.data:', res.data);
					return users;
				});
				};
			
			var users = [];
			
		}]); //end of service
})();