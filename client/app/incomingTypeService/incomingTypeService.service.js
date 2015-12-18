'use strict';

angular.module('spendspyApp')
  .factory('incomingTypeService', ['$resource', function ($resource) {
    return $resource('/api/incomingTypes', {}, {
    	'getTypes' : {
    		isArray : true,
    		method : 'GET'
    	}
    });
  }]);
