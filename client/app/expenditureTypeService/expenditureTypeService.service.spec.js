'use strict';

describe('Service: expenditureTypeService', function () {

  // load the service's module
  beforeEach(module('spendspyApp'));

  // instantiate service
  var expenditureTypeService;
  beforeEach(inject(function (_expenditureTypeService_) {
    expenditureTypeService = _expenditureTypeService_;
  }));

  it('should do something', function () {
    expect(!!expenditureTypeService).toBe(true);
  });

});
