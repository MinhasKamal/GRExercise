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

                    $(".awa-cut").click(function() {
                        $(".awa-essay").focus();
                        document.execCommand('cut');
                    });
                    $(".awa-paste").click(function() {
                        $(".awa-essay").focus();
                        navigator.clipboard.readText()
                            .then(txt => {
                                document.execCommand('insertText', false , txt);
                            }).catch(err => {
                                console.error("failed to read clipboard: ", err);
                            });
                    });
                    $(".awa-undo").click(function() {
                        $(".awa-essay").focus();
                        document.execCommand('undo');
                    });
                    $(".awa-redo").click(function() {
                        $(".awa-essay").focus();
                        document.execCommand('redo');
                    });
                    $(".awa-menu").click(function() {
                        $('.awa-menu-options').toggle();
                    });
                }],
            });
    }
]);
