(function () {
	anuglar.module('MRE')
		.controller(''MenuCtrl, ['$scope', function($scope, MenuService){
		var MENU = this.;

		this.getMenuInfo = function (){
			MenuService.getMenuInfo().then(function(data){
				MENU.menuInfo = data;
			})
		}

		//adding item to the menu

		this.addMenuItem = function() {
			
		}
		}]); //end of controller
})(); 