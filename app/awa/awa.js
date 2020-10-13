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
                    subHeaderTimer.isShow = true;

                    $scope.awaEssay = {};
                    $scope.awaEssay.wordCount = 0;
                    $scope.awaEssay.restriction = 'On';

                    $(".awa-cut").click(function() {
                        cut(".awa-essay");
                    });
                    $(".awa-paste").click(function() {
                        paste(".awa-essay");
                    });
                    $(".awa-undo").click(function() {
                        undo(".awa-essay");
                    });
                    $(".awa-redo").click(function() {
                        redo(".awa-essay");
                    });
                    $(".awa-menu").click(function() {
                        $('.awa-menu-options').toggle();
                    });

                    $scope.updateWordCount = function() {
                        $scope.awaEssay.wordCount = countWords($scope.essay);
                    };
                    $scope.changeQuestion = function() {
                        loadAWAQuestion($routeParams.type);
                    };
                    $scope.toggleRestriction = function() {
                        $scope.awaEssay.restriction = toggleRestriction();
                    };
                    $scope.downloadEssay = function() {
                        downloadEssay();
                    };
                }],
            });
    }
]);
