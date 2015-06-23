var app = angular.module('MRE');

app.service('RestaurantService', function($q, $http) {


	//get restaruant info for profile page
    this.getRestaurantInfo = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/findrestaurant'
        }).then(function(response) {
            deferred.resolve(response.data)                    
            console.log("response.data from restaurantService: ", response.data)
        })
        return deferred.promise;
    }

    this.getRestaurantById = function(resId) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/restaurant/' + resId
        }).then(function(response) {
            deferred.resolve(response.data)                    
            console.log("response.data from restaurantService: ", response.data)
        })
        return deferred.promise;
    }
	
	// this.day = function() {
	// 	var date = new Date();
	// 	var day = date.getDay();
	// 	var dayArr = [
	// 		"Sunday", 
	// 		"Monday", 
	// 		"Tuesday", 
	// 		"Wednesday", 
	// 		"Thursday", 
	// 		"Friday", 
	// 		"Saturday"];
	// 	return dayArr[day];
	// }

	// this.daySelector = function(today, schedule) {
	// 	if(schedule[0].hasOwnProperty(today)) {
	// 		this.today = schedule[0][today]
	// 	}
	// }

	// this.phoneNumberFormat = function(number) {
	// 	number = number.toString().split('')
	// 	var beginning = number.slice(0, 3)
	// 	var middle = number.slice(3, 6)
	// 	var end = number.slice(6, 10)
	// 	return "(" + beginning.join('') + ") " + middle.join('') + " - " + end.join('');
	// }

	// this.restaurants = [
	// 	{
	// 		businessName : "Chucky Cheese Nips",
	// 		businessEmail : "CCN@lipchips.net",
	// 		password : "WeLoveChildren",
	// 		businessAddress : {
	// 			addressOne : "123 Happy Lane",
	// 			addressTwo : "",
	// 			city : "Duboise",
	// 			state : "Idaho",
	// 			zip : "83401"
	// 		},
	// 		businessNumber: 2085342947,
	// 		businessId: 1,

	// 		operatingHours: [{
	// 			Sunday: [
	// 				{ status: "Closed"},
	// 				{ hours: [{	
	// 					businessHoursFrom: "", 
	// 					businessHoursTo: "" }]
	// 				}
	// 			],		
	// 			Monday: [
	// 				{ status: "Open"},
	// 				{ hours: [{	
	// 					businessHoursFrom: "10am", 
	// 					businessHoursTo: "9pm" }]
	// 				}
	// 			],
	// 			Tuesday: [
	// 				{ status: "Open"},
	// 				{ hours: [{	
	// 					businessHoursFrom: "10am", 
	// 					businessHoursTo: "9pm" }]
	// 				}
	// 			],
	// 			Wednesday: [
	// 				{ status: "Open"},
	// 				{ hours: [{	
	// 					businessHoursFrom: "10am", 
	// 					businessHoursTo: "9pm" }]
	// 				}
	// 			],
	// 			Thursday: [
	// 				{ status: "Open"},
	// 				{ hours: [{	
	// 					businessHoursFrom: "10am", 
	// 					businessHoursTo: "9pm" }]
	// 				}
	// 			],
	// 			Friday: [
	// 				{ status: "Open"},
	// 				{ hours: [{	
	// 					businessHoursFrom: "10am", 
	// 					businessHoursTo: "9pm" }]
	// 				}
	// 			],
	// 			Saturday: [
	// 				{ status: "Open"},
	// 				{ hours: [{	
	// 					businessHoursFrom: "10am", 
	// 					businessHoursTo: "9pm" }]
	// 				}
	// 			]			
	// 		}],
			
	// 		tablePlacement : [{
	// 			tableNumber : "15",
	// 			capacity : "6"
	// 		}],
	// 		menu : [
	// 			{ category : "Drinks",
	// 			items : [{
	// 				name : "Tequila, By Itself, No Chasers",
	// 				cost : 4.00,
	// 				description : "Quit crying and be a man.",
	// 				photo : ""
	// 				}, {
	// 				name : "Salt, marinated in Lime Juice and Tequila",
	// 				cost : 4.00,
	// 				description : "A meal for champions",
	// 				photo : ""
	// 				},{
	// 				name : "Loaded Corona",
	// 				cost : 6.00,
	// 				description : "What's better than beer? Beer with tequila in it. Enjoy.",
	// 				photo : ""
	// 				}]
	// 			},

	// 			{ category : "Appetizers",
	// 			items : [{
	// 				name : "Qrazy Quesadillas",
	// 				cost : 6.99,
	// 				description : "Two quesadillas sliced up and loaded with a variety of goodies, from blackened chicken to corn, peppers and avocado chunks.",
	// 				photo : ""
	// 				}, {
	// 				name : "Chips & Habanero Salsa",
	// 				cost : 3.50,
	// 				description : "Ready for a mouth full of fire? Goes perfectly with a flaming shot of Bacardi 151...if you like shooting napalm out of your ass.",
	// 				photo : ""
	// 				}, {
	// 				name : "Brownbag Burrito",
	// 				cost : 5.00,
	// 				description : "A sketchy burrito in a brown paper bag, sliced into sections so you can share the delicious possibility of E. Coli with your friends.",
	// 				photo : ""
	// 				}]
	// 			}
	// 		]
	// 	},
	// 	{
	// 		"businessName" : "Sweeto Burrito",
	// 		"businessEmail" : "sweeto@dreamfinder.com",
	// 		"password" : "carne",
	// 		"businessAddress" : {
	// 			"addressOne" : "579 armando casas",
	// 			"addressTwo" : "",
	// 			"city" : "Orem",
	// 			"state" : "Utah",
	// 			"zip" : "84097"
	// 		},
	// 		businessNumber: 8017343957,
	// 		businessId: 2,

	// 		"operatingHours": [{
	// 			"Sunday": [
	// 				{ "status": "Closed"},
	// 				{ "hours": [{	
	// 					"businessHoursFrom": "11am", 
	// 					"businessHoursTo": "11pm" }]
	// 				}
	// 			],	
	// 			"Monday": [
	// 				{ "status": "open"},
	// 				{ "hours": [{	
	// 					"businessHoursFrom": "11am", 
	// 					"businessHoursTo": "11pm" }]
	// 				}
	// 			],
	// 			"Tuesday": [
	// 				{ "status": "open"},
	// 				{ "hours": [{	
	// 					"businessHoursFrom": "11am", 
	// 					"businessHoursTo": "11pm" }]
	// 				}
	// 			],
	// 			"Wednesday": [
	// 				{ "status": "open"},
	// 				{ "hours": [{	
	// 					"businessHoursFrom": "11am", 
	// 					"businessHoursTo": "11pm" }]
	// 				}
	// 			],
	// 			"Thursday": [
	// 				{ "status": "open"},
	// 				{ "hours": [{	
	// 					"businessHoursFrom": "11am", 
	// 					"businessHoursTo": "11pm" }]
	// 				}
	// 			],
	// 			"Friday": [
	// 				{ "status": "open"},
	// 				{ "hours": [{	
	// 					"businessHoursFrom": "11am", 
	// 					"businessHoursTo": "11pm" }]
	// 				}
	// 			],
	// 			"Saturday": [
	// 				{ "status": "open"},
	// 				{ "hours": [{	
	// 					"businessHoursFrom": "11am", 
	// 					"businessHoursTo": "11pm" }]
	// 				}
	// 			]			
	// 		}],
			
	// 		"tablePlacement" : [{
	// 			"tableNumber" : "20",
	// 			"capacity" : "4"
	// 		}],
	// 		"menu" : [{ 
	// 			"category" : "",
	// 			"items" : [{
	// 				"name" : "",
	// 				"cost" : "",
	// 				"description" : "",
	// 				"photo" : ""
	// 				}]				
	// 		}]
	// 	}
	// ];

})