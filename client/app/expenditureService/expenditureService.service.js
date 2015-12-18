'use strict';

angular.module('spendspyApp')
  .factory('expenditureService', ['$resource', function ($resource) {
    return $resource('/api/expenditures:id', {}, {
      'getExpenditures' : {
        method : 'GET',
        isArray : true
      },
      'createExpenditure' : {
        method : 'POST'
      },
      'updateExpenditure' : {
        method : 'PUT'
      },
      'deleteExpenditure' : {
        method : 'DELETE'
      }
    });
  }]);
