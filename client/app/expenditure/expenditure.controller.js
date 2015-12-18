'use strict';

angular.module('spendspyApp')
  .controller('ExpenditureCtrl',['$scope', 'expenditureTypeService', 'expenditureService', function ($scope, expenditureTypeService, expenditureService) {
  	$scope.expenditure = null;
  	
    $scope.init = function () {
	    expenditureTypeService.getTypes({}, function (list){
	    	$scope.expenditureTypes = list;
	    }, function () {
	    	console.log('Error');
	    });

	    expenditureService.getExpenditures({}, function (list){
	    	$scope.expenditures = list;
	    }, function () {
	    	console.log('Error');
	    });
	};
  }]);
