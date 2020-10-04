'use strict';

var errorModule = angular.module('errorModule', [
    'ngRoute',
]);

errorModule.config([
    '$routeProvider',
    
    function ($routeProvider) {
        $routeProvider
            .when('/error', {
                templateUrl: 'app/error/error.html',
                controller: [
                '$scope',
                
                function($scope){
                }],
            });
    }
]);
