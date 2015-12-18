'use strict';

angular.module('spendspyApp')
  .factory('incomingService', ['$resource', function ($resource) {
    return $resource('/api/incomings/:id', {}, {
      'getIncomings' : {
        method : 'GET',
        isArray : true
      },
      'createIncoming' : {
        method : 'POST'
      },
      'updateIncoming' : {
        method : 'PUT'
      },
      'deleteIncoming' : {
        method : 'DELETE'
      }
    });
  }]);
