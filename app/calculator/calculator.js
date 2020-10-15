'use strict';

var calculatorModule = angular.module('calculatorModule', [
    'ngRoute',
]);

calculatorModule.config([
    '$routeProvider',
    
    function ($routeProvider) {
        $routeProvider
            .when('/calculator', {
                templateUrl: 'app/calculator/calculator.html',
                controller: [
                '$scope',
                
                function($scope) {
                    subHeaderTitle.value = "Calculator";
                    subHeaderTimer.isShow = true;

                    $(".calculator-cross").click(function() {
                        console.log("This will hide the calculator.");
                    });
                    $(document).on("keypress", function (event) {
                        var output = processKeyPressEvent(event.which);
                        $(".calculator-result").text(output);
                    });
                    $(".calculator-button").click(function(){
                        var output = processbuttonPressEvent($(this).text());
                        $(".calculator-result").text(output);
                    });
                    $(".calculator-transfer-display").click(function(){
                        console.log("This will transfer result to text-box.");
                    });

                    clearAll();
                }],
            });
    }
]);
