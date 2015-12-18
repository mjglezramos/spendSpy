'use strict';

angular.module('spendspyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/expenditure', {
        templateUrl: 'app/expenditure/expenditure.html',
        controller: 'ExpenditureCtrl'
      });
  });
