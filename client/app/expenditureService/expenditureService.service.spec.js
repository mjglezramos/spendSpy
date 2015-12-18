'use strict';

describe('Service: expenditureService', function () {

  // load the service's module
  beforeEach(module('spendspyApp'));

  // instantiate service
  var expenditureService;
  beforeEach(inject(function (_expenditureService_) {
    expenditureService = _expenditureService_;
  }));

  it('should do something', function () {
    expect(!!expenditureService).toBe(true);
  });

});
