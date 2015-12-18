'use strict';

angular.module('spendspyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/incoming', {
        templateUrl: 'app/incoming/incoming.html',
        controller: 'IncomingCtrl'
      });
  });
