'use strict';

var timerModule = angular.module('timerModule', []);

timerModule.directive('timer', 

    function() {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'app/common/timer.html',
            controller: [
            '$scope',

            function($scope) {
                $(".timer-play-pause").click(function() {
                    timerPlayPause();
                });
                $(".timer-edit").click(function() {
                    timerEdit();
                });
                $(".timer-reset").click(function() {
                    timerReset();
                });
                $(".timer-hide").click(function() {
                    timerHide();
                });

                showTime();
            }],
        };
    }
);