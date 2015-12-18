'use strict';

describe('Directive: cash', function () {

  // load the directive's module and view
  beforeEach(module('spendspyApp'));
  beforeEach(module('app/cash/cash.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cash></cash>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the cash directive');
  }));
});