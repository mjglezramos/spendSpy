'use strict';
angular.module('spendspyApp')
  .controller('CashAddingCtrl',['$scope', 'cashTypes', 'cash', '$mdDialog', function ($scope, cashTypes, cash, $mdDialog) {
    $scope.cashTypes = cashTypes;
    $scope.cashTypeSelected = null;
    
    if (cash) {
        var date = cash.date;
        $scope.cash = cash;
        $scope.cash.date = new Date(date);
        $scope.cashTypeSelected = cash;
    } else {
        $scope.cash = {date : new Date(), type : '', price : 0.0, description : ''};
    }

    $scope.save = function () {
    	$mdDialog.hide([$scope.cash]);
    };

    $scope.hide = function () {
    	$mdDialog.hide([]);
    };
  }]);
