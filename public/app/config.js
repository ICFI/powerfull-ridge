/*globals angular */

(function () {
    'use strict';

    var dataPaths = {
            'tagcloud'      : '/api/v0/tagcloud/'
        },

        routeData = [
            {
                'title'       : 'Message Board Stats',
                'path'        : '/mboard-stats',
                'controller'  : 'MessageBoardStatsController',
                'templateUrl' : '/app/partials/messageboardstats.html',
                'isDefault'   : true
            }
        ],

        routeProvider = function ($routeProvider) {
            var defaultIsConfigured = false;

            angular.forEach(routeData, function (route) {
                $routeProvider.when(route.path, {
                    'controller'    : route.controller,
                    'templateUrl'   : route.templateUrl
                });

                if (route.isDefault && !defaultIsConfigured) {
                    $routeProvider.otherwise({
                        redirectTo: route.path
                    });

                    defaultIsConfigured = true;
                }
            });
        };

    angular.module('app')
        .constant('dataPaths', dataPaths)
        .constant('routeData', routeData)
        .config(['$routeProvider', routeProvider]);
}());