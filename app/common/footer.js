'use strict';

var footerModule = angular.module('footerModule', []);

footerModule.directive('footer',

    function(){
        return{
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/footer.html',
            controller: [
            '$scope',

            function($scope){
            }],
        };
    }
);