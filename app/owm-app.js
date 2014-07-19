angular.module('OWMApp', ['ngRoute'])
	.value('owmCities' ['New York', 'Dallas', 'Chicago'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : './home.html',
            controller : 'HomeCtrl'
        }).when('/cities', {
	            templateUrl : './city.html',
	            controller : 'CityCtrl',
	            resolve : {
	            	city: function(owmCities, $route, $location) {
	            		var city = $route.current.params.city;
	            		if (owmCities.indexOf(city) == -1) {
	            			$location.path('/error');
	            			return;
	            		}
	            		return city;
	            	}
	            }
        }).when('/error', {
    		template : '<p>Error page not found</p>'
    	}).when('/city', {
	    	templateUrl : './city.html',
	    	controller : 'CityCtrl',
	    	resolve : {
	    		city : function(owmFindCity, $route) {
	    			var city = $route.current.params.city;
	    			return owmFindCity(city);
	    		}
	    	}
		}).otherwise({
			redirectTo : '/error'
		}).run(function($rootScope, $location) {
			$rootScope.$on('$routeChangeError', function() {
				$location.path('/error');
			});
		});
    }).controller('HomeCtrl', function($scope) {
=======
        // Note this a big in the learning docs... there are only two urls, well three
        //  with the error. Since resolve expects to operate on the :city param
         
        }).when('/cities/:city', {
            templateUrl : './city.html',
            controller : 'CityCtrl',
            // Runs prior to creating the control and creates an item
            //  "city" which can be injected into the controller
            resolve : {
                city: function(owmCities, $route, $location) {
                    var city = $route.current.params.city;
                    if (owmCities.indexOf(city) == -1) {
                        $location.path('/error');
                        return;
                    }
                    return city;
                }
            }
            
        }).when('/error', {
            template : '<p>Error page not found</p>'
        }).otherwise({
            redirectTo : '/error'
        })
    })
    .run(function($rootScope, $location) {
            $rootScope.$on('$routeChangeError', function() {
                $location.path('/error');
            });
    })
    .controller('HomeCtrl', function($scope) {
>>>>>>> debugging_routing
        //empty for now
    })
    .controller('CityCtrl', function($scope, $routeParams, city) {
    	$scope.city = $routeParams.city;
    });