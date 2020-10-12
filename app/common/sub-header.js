'use strict';

var subHeaderModule = angular.module('subHeaderModule', []);

subHeaderModule.directive('subHeader', 

    function(){
        return{
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/sub-header.html',
            controller: [
            '$scope',

            function($scope){
                $scope.subHeaderTitle = {};
                subHeaderTitle = $scope.subHeaderTitle;

                $scope.subHeaderTimer = {};
                subHeaderTimer = $scope.subHeaderTimer;
            }],
        };
    }
);
