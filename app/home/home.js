'use strict';

var homeModule = angular.module('homeModule', [
    'ngRoute',
]);

homeModule.config([
    '$routeProvider',
    
    function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/home.html',
                controller: [
                '$scope',
                
                function($scope){
                }],
            });
    }
]);