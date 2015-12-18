'use strict';

angular.module('spendspyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/benefit', {
        templateUrl: 'app/benefit/benefit.html',
        controller: 'BenefitCtrl'
      });
  });
