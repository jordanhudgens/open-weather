angular.module('OWMApp', ['ngRoute'])
    .config($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : './home.html',
            controller : 'HomeCtrl'
        }).when('/city', {
            templateUrl : './city.html',
            controller : 'CityCtrl'
        });
    })
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })
    .controller('CityCtrl', function($scope, $routeParams) {
        $scope.city = $routeParams.city;
    });