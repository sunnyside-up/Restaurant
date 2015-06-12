var app = angular.module('MRE');

app.controller('RestaurantCtrl', function($scope, getRestById, RestaurantService, $log) {
	
	$scope.thisRest = getRestById;

	$scope.day = function() {
		$scope.dayOfWeek = RestaurantService.day();
	}();

	$scope.daySelector = RestaurantService.daySelector;

	$scope.phoneNumberFormat = RestaurantService.phoneNumberFormat;
	
	$scope.today = function() {
	    $scope.dt = new Date();
	}();

	$scope.clear = function () {
		$scope.dt = null;
	};

	// Disable weekend selection
	$scope.disabled = function(date, mode) {
		return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
	};

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
	$scope.mytime = new Date();

	$scope.hstep = 1;
	$scope.mstep = 15;

	$scope.options = {
		hstep: [1, 2, 3],
		mstep: [1, 5, 10, 15, 25, 30]
	};

	$scope.ismeridian = true;
	$scope.toggleMode = function() {
		$scope.ismeridian = ! $scope.ismeridian;
	};

	$scope.update = function() {
	var d = new Date();
	d.setHours( 14 );
	d.setMinutes( 0 );
	$scope.mytime = d;
	};

	$scope.changed = function () {
		$log.log('Time changed to: ' + $scope.mytime);
	};

	$scope.clear = function() {
		$scope.mytime = null;
	};
})