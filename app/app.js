'use strict';

var subHeaderTitle = {};

window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });

var GRExercise = angular.module('GRExercise', [
    'ngRoute',
    'homeModule',
    'errorModule',
    'headerModule',
    'subHeaderModule',
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