'use strict';

angular.module('spendspyApp')
  .directive('cash', function () {
    return {
      templateUrl: 'app/cash/cash.html',
      restrict: 'E',
      controller : 'cashController',
      scope : {
        type : '=typeOfCash',
        listTypes : '=listTypes',
        cashes : '=listCashes',
        isIncoming : '=isIncoming',
        cash : '=cash'
      }
    };
  }).controller('cashController',['$scope', '$mdDialog', 'incomingService', 'expenditureService', function ($scope, $mdDialog, incomingService, expenditureService){
    $scope.cashes = [];

    $scope.addCash = function () {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        templateUrl: 'app/cashAdding/cashAdding.html',
        controller: 'CashAddingCtrl',
        locals : {
          cashTypes : $scope.listTypes,
          cash : null
        }
      }).then(function (response) {
        if (response  && response.length > 0) {
          $scope.cash = response[0];
          $scope.cashes.push($scope.cash);
          $scope.save();
        }
      });
    };

    $scope.edit = function (cash) {
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        templateUrl: 'app/cashAdding/cashAdding.html',
        controller: 'CashAddingCtrl',
        locals : {
          cashTypes : $scope.listTypes,
          cash : cash
        }
      }).then(function (response) {
        if (response  && response.length > 0) {
          $scope.updateCash(response[0]);
        }
      });
    };

    $scope.updateCash = function (cash) {
      if ($scope.isIncoming) {
        incomingService.updateIncoming({id : cash._id}, cash, function () {
          //Volver a recargar
        }, function () {
          console.log('Error');
        });
      } else {
        expenditureService.updateExpenditure({id : cash._id}, cash, function (){
          //Volver a recargar
        }, function (){
          console.log('Error');
        });
      }
    };

    $scope.delete = function (cash) {
      if ($scope.isIncoming) {
        incomingService.deleteIncoming({id : cash._id}, function () {
          //Volver a recargar
        }, function () {
          console.log('Error');
        });
      } else {
        expenditureService.deleteExpenditure({id:cash._id}, function (){
          //Volver a recargar
        }, function (){
          console.log('Error');
        });
      }
    };

    $scope.save = function () {
      if ($scope.isIncoming) {
        incomingService.createIncoming($scope.cash, function () {}, function () {
           console.log('Error');
        });
      } else {
        expenditureService.createExpenditure($scope.cash, function () {}, function () {
          console.log('Error');
        });
      }
    };
  }]);