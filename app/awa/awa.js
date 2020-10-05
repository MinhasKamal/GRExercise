'use strict';

var awaModule = angular.module('awaModule', [
    'ngRoute',
]);

awaModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/awa', {
                templateUrl: 'app/awa/awa.html',
                controller: [
                '$scope',
                '$routeParams',

                function($scope, $routeParams) {
                    loadAWAQuestion($routeParams.type);
                }],
            });
    }
]);
