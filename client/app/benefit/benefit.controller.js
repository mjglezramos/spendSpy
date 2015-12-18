'use strict';

angular.module('spendspyApp')
  .controller('BenefitCtrl', ['$scope', 'incomingService', 'expenditureService',function ($scope, incomingService, expenditureService) {
    $scope.sumIncomings = 0.0;
    $scope.sumExpenditures = 0.0;
    $scope.init = function () {
    	incomingService.getIncomings({}, function (list){
	    	$scope.incomings = list;
	    }, function () {
	    	console.log('Error')
	    });

	    expenditureService.getExpenditures({}, function (list){
	    	$scope.expenditures = list;
	    }, function () {
	    	console.log('Error');
	    });
    };

    $scope.sumIncoming = function (price) {
    	$scope.sumIncomings = $scope.sumIncomings + price;
    };

    $scope.sumExpenditure = function (price) {
    	$scope.sumExpenditures = $scope.sumExpenditures + price;
    };
  }]);
