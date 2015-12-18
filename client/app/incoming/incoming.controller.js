'use strict';

angular.module('spendspyApp')
  .controller('IncomingCtrl',['$scope','incomingTypeService', 'incomingService', function ($scope, incomingTypeService, incomingService) {
    $scope.incoming = null;

    $scope.init = function () {
	    incomingTypeService.getTypes({}, function (list){
	    	$scope.incomingTypes = list;
	    }, function () {
	    	console.log('Error');
	    });

	    incomingService.getIncomings({}, function (list){
	    	$scope.incomings = list;
	    }, function () {
	    	console.log('Error')
	    });
	};
  }]);
