var app = angular.module('MRE');

app.service('RestaurantService', function($q, $http) {
	
	this.day = function() {
		var date = new Date();
		var day = date.getDay();
		var dayArr = [
			"Sunday", 
			"Monday", 
			"Tuesday", 
			"Wednesday", 
			"Thursday", 
			"Friday", 
			"Saturday"];
		return dayArr[day];
	}

	this.daySelector = function(today, schedule) {
		if(schedule[0].hasOwnProperty(today)) {
			this.today = schedule[0][today]
		}
	}

	this.phoneNumberFormat = function(number) {
		number = number.toString().split('')
		var beginning = number.slice(0, 3)
		var middle = number.slice(3, 6)
		var end = number.slice(6, 10)
		return "(" + beginning.join('') + ") " + middle.join('') + " - " + end.join('');
	}

	this.restaurants = [
		{
			"businessName" : "Chucky Cheese Nips",
			"businessEmail" : "CCN@lipchips.net",
			"password" : "WeLoveChildren",
			"businessAddress" : {
				"addressOne" : "123 Happy Lane",
				"addressTwo" : "",
				"city" : "Duboise",
				"state" : "Idaho",
				"zip" : "83401"
			},
			businessNumber: 2085342947,
			businessId: 1,

			"operatingHours": [{
				"Sunday": [
					{ "status": "Closed"},
					{ "hours": [{	
						"businessHoursFrom": "", 
						"businessHoursTo": "" }]
					}
				],		
				"Monday": [
					{ "status": "Open"},
					{ "hours": [{	
						"businessHoursFrom": "10am", 
						"businessHoursTo": "9pm" }]
					}
				],
				"Tuesday": [
					{ "status": "Open"},
					{ "hours": [{	
						"businessHoursFrom": "10am", 
						"businessHoursTo": "9pm" }]
					}
				],
				"Wednesday": [
					{ "status": "Open"},
					{ "hours": [{	
						"businessHoursFrom": "10am", 
						"businessHoursTo": "9pm" }]
					}
				],
				"Thursday": [
					{ "status": "Open"},
					{ "hours": [{	
						"businessHoursFrom": "10am", 
						"businessHoursTo": "9pm" }]
					}
				],
				"Friday": [
					{ "status": "Open"},
					{ "hours": [{	
						"businessHoursFrom": "10am", 
						"businessHoursTo": "9pm" }]
					}
				],
				"Saturday": [
					{ "status": "Open"},
					{ "hours": [{	
						"businessHoursFrom": "10am", 
						"businessHoursTo": "9pm" }]
					}
				]			
			}],
			
			"tablePlacement" : [{
				"tableNumber" : "15",
				"capacity" : "6"
			}],
			"menu" : [{ 
				"category" : "",
				"items" : [{
					"name" : "",
					"cost" : "",
					"description" : "",
					"photo" : ""
					}]				
			}]
		},
		{
			"businessName" : "Sweeto Burrito",
			"businessEmail" : "sweeto@dreamfinder.com",
			"password" : "carne",
			"businessAddress" : {
				"addressOne" : "579 armando casas",
				"addressTwo" : "",
				"city" : "Orem",
				"state" : "Utah",
				"zip" : "84097"
			},
			businessNumber: 8017343957,
			businessId: 2,

			"operatingHours": [{
				"Sunday": [
					{ "status": "Closed"},
					{ "hours": [{	
						"businessHoursFrom": "11am", 
						"businessHoursTo": "11pm" }]
					}
				],	
				"Monday": [
					{ "status": "open"},
					{ "hours": [{	
						"businessHoursFrom": "11am", 
						"businessHoursTo": "11pm" }]
					}
				],
				"Tuesday": [
					{ "status": "open"},
					{ "hours": [{	
						"businessHoursFrom": "11am", 
						"businessHoursTo": "11pm" }]
					}
				],
				"Wednesday": [
					{ "status": "open"},
					{ "hours": [{	
						"businessHoursFrom": "11am", 
						"businessHoursTo": "11pm" }]
					}
				],
				"Thursday": [
					{ "status": "open"},
					{ "hours": [{	
						"businessHoursFrom": "11am", 
						"businessHoursTo": "11pm" }]
					}
				],
				"Friday": [
					{ "status": "open"},
					{ "hours": [{	
						"businessHoursFrom": "11am", 
						"businessHoursTo": "11pm" }]
					}
				],
				"Saturday": [
					{ "status": "open"},
					{ "hours": [{	
						"businessHoursFrom": "11am", 
						"businessHoursTo": "11pm" }]
					}
				]			
			}],
			
			"tablePlacement" : [{
				"tableNumber" : "20",
				"capacity" : "4"
			}],
			"menu" : [{ 
				"category" : "",
				"items" : [{
					"name" : "",
					"cost" : "",
					"description" : "",
					"photo" : ""
					}]				
			}]
		},
		
	]

})