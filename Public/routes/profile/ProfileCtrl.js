(function () {
	angular.module('MRE')
		.controller('ProfileCtrl', ['$scope', function($scope, ProfileService, restarant){
		var PR = this;
			
		this.getRestaruantInfo = function (){
			ProfileService.getRestaruantInfo().then(function(data){
				PR.restaruantInfo = data;
			})
		}


			
		}]); //end of controller
})();

//test test