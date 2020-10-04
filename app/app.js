'use strict';

var GRExercise = angular.module('GRExercise', [
    'ngRoute',
    'homeModule',
    'errorModule',
]);

GRExercise.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/home',
            })
            .otherwise({
                redirectTo: '/error',
            });
    }
]);