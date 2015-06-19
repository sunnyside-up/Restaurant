var app = angular.module('MRE');

app.service('UserService', function($q, $http) {

	this.getUserInfo = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: '/api/client'
        }).then(function(response) {
            deferred.resolve(response.data)                    
            console.log("response.date from Client User Server: ", response.data)
        })
        return deferred.promise;
    }
});