'use strict';

describe('Controller: ExpenditureCtrl', function () {

  // load the controller's module
  beforeEach(module('spendspyApp'));

  var ExpenditureCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpenditureCtrl = $controller('ExpenditureCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
