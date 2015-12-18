'use strict';

describe('Controller: BenefitCtrl', function () {

  // load the controller's module
  beforeEach(module('spendspyApp'));

  var BenefitCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BenefitCtrl = $controller('BenefitCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
