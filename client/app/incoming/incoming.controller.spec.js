'use strict';

describe('Controller: IncomingCtrl', function () {

  // load the controller's module
  beforeEach(module('spendspyApp'));

  var IncomingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IncomingCtrl = $controller('IncomingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
