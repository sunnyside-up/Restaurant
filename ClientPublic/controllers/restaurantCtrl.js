var app = angular.module('MRE');

app.controller('RestaurantCtrl', function($scope, getRestById, RestaurantService, $log) {
	
	// resolve variable for this restaurant
	$scope.thisRest = getRestById;

	// testing methods for verifying ng-model values
	$scope.dataTesting = {
		dateChange: function() {
			console.log($scope.resDay);
		},
		timeChange: function() {
			console.log($scope.resTime);
		}
	};

	// methods for displaying today's hours
	$scope.day = function() {
		$scope.dayOfWeek = RestaurantService.day();
	}();

	$scope.daySelector = RestaurantService.daySelector;

	$scope.phoneNumberFormat = RestaurantService.phoneNumberFormat;
	
	// methods for Datepicker
	$scope.today = function() {
	    $scope.resDay = new Date();
	}();

	$scope.clear = function () {
		$scope.resDay = null;
	};

	// Disable weekend selection
	// $scope.disabled = function(date, mode) {
	// 	return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	// };

	$scope.toggleMin = function() {
		$scope.minDate = $scope.minDate ? null : new Date();
	}();

	$scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	};

	$scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	};

	$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	$scope.format = $scope.formats[0];

	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	var afterTomorrow = new Date();
	afterTomorrow.setDate(tomorrow.getDate() + 2);
	
	$scope.events =
	[
	  {
	    date: tomorrow,
	    status: 'full'
	  },
	  {
	    date: afterTomorrow,
	    status: 'partially'
	  }
	];

	$scope.getDayClass = function(date, mode) {
		if (mode === 'day') {
		  var dayToCheck = new Date(date).setHours(0,0,0,0);

		  for (var i=0;i<$scope.events.length;i++){
		    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

		    if (dayToCheck === currentDay) {
		      return $scope.events[i].status;
		    }
		  }
		}
		return '';
	};

	// Timepicker $scope properties
	$scope.resTime = new Date();

	$scope.hstep = 1;
	$scope.mstep = 15;

	$scope.ismeridian = true;

	$scope.update = function() {
		$scope.resTime = new Date();
		$scope.resDay = new Date();
	};

	// Preorder Inputs

	
})