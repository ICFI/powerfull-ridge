/*globals angular */

(function () {
    'use strict';

    var tagCloudItems = function ($http, $q, dataPaths) {
            var formatGetPath = function (params) {
                    return dataPaths.tagcloud;
                },

                get = function (params) {
                    var deferred = $q.defer();

                    $http({
                        'method': 'GET',
                        'url'   : formatGetPath(params)
                    }).success(function (data) {
                        deferred.resolve(data);
                    }).error(function () {
                        deferred.reject('There were no results.');
                    });

                    return deferred.promise;
                };

            return {
                get : get
            };
        }

    angular.module('app').factory('tagCloudItems', ['$http', '$q', 'dataPaths', tagCloudItems]);
}());