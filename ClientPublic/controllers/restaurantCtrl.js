var app = angular.module('MRE');

app.controller('RestaurantCtrl', function($scope, getRestById, UserService, RestaurantService, ReservationService, $log) {
	
	// resolve variable for this restaurant
	$scope.thisRest = getRestById;
	console.log('getRestById in restaurantCtrl: ', getRestById);

	
	$scope.partySize = null;
	$scope.preorders = [];
	$scope.resDayAndTime = new Date();

	// testing methods for verifying ng-model values
	$scope.dataTesting = {
		dateChange: function() {
			console.log($scope.resDayAndTime);
		},
		timeChange: function() {
			console.log($scope.resDayAndTime);
		}
	};

	// methods for Datepicker
	$scope.today = function() {
	    $scope.resDayAndTime = new Date();
	}();

	$scope.clear = function () {
		$scope.resDayAndTime = null;
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
		ReservationService.getDayClass(date, mode);
	};

	// Timepicker $scope properties

	$scope.hstep = 1;
	$scope.mstep = 15;

	$scope.ismeridian = true;

	$scope.refreshDayAndTime = function() {
		$scope.resDayAndTime = new Date();
	};


	// Preorder Inputs

	$scope.addPreorder = function() {
		$scope.preorders.push({
			name: $scope.itemObj.name,
			quantity: $scope.preorderQuantity,
			sumCost: $scope.itemObj.cost * $scope.preorderQuantity,
			index: $scope.preorders.length
		});
		console.log($scope.preorders);
	}
	
	// Reservation Submit
	$scope.submitRes = function() {
		var submitRes = ReservationService.submitRes;
		return UserService.getClient()
		.then(function(res, ReservationService) {
			console.log(res);
			submitRes({
				resvStatus: "Pending",
				businessId: $scope.thisRest._id,
				resDayAndTime: $scope.resDayAndTime,
				resSubmitTime: new Date(),
				guestNumber: $scope.partySize,
				orderCart: $scope.preorders,
				name: res.name,
				phoneNumber: res.phoneNumber,
				email: res.email
			});
		}).catch(function(err) {
			console.log(err);
		});
		
	};
})