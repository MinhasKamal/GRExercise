'use strict';

var GRExercise = angular.module('GRExercise', [
    'ngRoute',
    'homeModule',
    'errorModule',
    'headerModule',
    'footerModule',
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