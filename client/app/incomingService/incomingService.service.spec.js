'use strict';

describe('Service: incomingService', function () {

  // load the service's module
  beforeEach(module('spendspyApp'));

  // instantiate service
  var incomingService;
  beforeEach(inject(function (_incomingService_) {
    incomingService = _incomingService_;
  }));

  it('should do something', function () {
    expect(!!incomingService).toBe(true);
  });

});
