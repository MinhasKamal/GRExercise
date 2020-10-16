'use strict';

var vocabModule = angular.module('vocabModule', [
    'ngRoute',
]);

vocabModule.config([
    '$routeProvider',

    function ($routeProvider) {
        $routeProvider
            .when('/vocab', {
                templateUrl: 'app/vocab/vocab.html',
                controller: [
                '$scope',

                function($scope){
                    subHeaderTitle.value = "Vocab";
                    subHeaderTimer.isShow = false;

                    loadVocabList();

                    $scope.vocab = {};
                    var vocabIndex = 0;
                    $scope.vocab = getVocab(vocabIndex);

                    $scope.nextWord = function() {
                        if(vocabIndex < 123) $scope.vocab = getVocab(++vocabIndex);
                    };
                    $scope.prevWord = function() {
                        if(vocabIndex > 0) $scope.vocab = getVocab(--vocabIndex);
                    };
                }],
            });
    }
]);