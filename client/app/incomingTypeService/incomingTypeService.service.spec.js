'use strict';

describe('Service: incomingTypeService', function () {

  // load the service's module
  beforeEach(module('spendspyApp'));

  // instantiate service
  var incomingTypeService;
  beforeEach(inject(function (_incomingTypeService_) {
    incomingTypeService = _incomingTypeService_;
  }));

  it('should do something', function () {
    expect(!!incomingTypeService).toBe(true);
  });

});
