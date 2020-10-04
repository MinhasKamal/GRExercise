'use strict';

var headerModule = angular.module('headerModule', []);

headerModule.directive('header', 

    function(){
        return{
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/header.html',
            controller: [
            '$scope',

            function($scope){
            }],
        };
    }
);