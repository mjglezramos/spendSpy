'use strict';

angular.module('spendspyApp')
  .factory('expenditureTypeService', ['$resource' , function ($resource) {
    return $resource('/api/expenditureTypes', {}, {
        'getTypes' : {
          isArray : true,
          method : 'GET'
        }
    });
  }]);
