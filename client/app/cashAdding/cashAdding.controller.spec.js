'use strict';

describe('Controller: CashAddingCtrl', function () {

  // load the controller's module
  beforeEach(module('spendspyApp'));

  var CashAddingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CashAddingCtrl = $controller('CashAddingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
