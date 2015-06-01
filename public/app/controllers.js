/*globals angular */

(function () {
    'use strict';

    var HeaderController = function ($scope, $rootScope, $location, routeData) {
            var setPageTitle = function () {
                    var index = routeData.length,
                        routeFound = false,
                        path;

                    while (index && !routeFound) {
                        path = routeData[index - 1].path;
                        if ($location.path() === path) {
                            $scope.pagetitle = routeData[index - 1].title;
                            routeFound = true;
                        }

                        index -= 1;
                    }
                };

            $scope.$location = $location;
            $scope.routeData = routeData;
            
            
            $rootScope.$on("$routeChangeSuccess", function () {
                setPageTitle();
            });
        },

        MessageBoardStatsController = function ($scope, tagCloudItems) {
            var setStatus = function (message, type) {
                    $scope.statusMessage     = message;
                    $scope.statusType        = type;
                },

                clearStatus = function () {
                    setStatus('', '');
                },

                init = function () {
                    $scope.words = [];
                    $scope.test=5;
                    tagCloudItems.get().then(
                        function (data) {
                            angular.copy(data, $scope.words);
                        },
                        function (message) {
                            setStatus(message, 'alert-danger');
                        }
                    );
                };

            $scope.words    = [];
            //$scope.colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976"];
            
            $scope.update = function() {
              $scope.words.splice(-5);
            };
            
            $scope.statusMessage    = '';
            $scope.statusType       = '';
            $scope.test=5;

            init();
        }

    angular.module('app').controller('HeaderController', [
        '$scope',
        '$rootScope',
        '$location',
        'routeData',
        HeaderController
    ]);

    angular.module('app').controller('MessageBoardStatsController', [
        '$scope',
        'tagCloudItems',
        MessageBoardStatsController
    ]);
}());