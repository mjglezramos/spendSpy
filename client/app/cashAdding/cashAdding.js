'use strict';

angular.module('spendspyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cashAdding', {
        templateUrl: 'app/cashAdding/cashAdding.html',
        controller: 'CashAddingCtrl'
      });
  });
