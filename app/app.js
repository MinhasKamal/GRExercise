'use strict';

var subHeaderTitle = {};
var subHeaderTimer = {};

window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });

var GRExercise = angular.module('GRExercise', [
    'ngRoute',
    'homeModule',
    'errorModule',
    'awaModule',
    'headerModule',
    'subHeaderModule',
    'footerModule',
    'timerModule',
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