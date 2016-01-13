'use strict';

var _ = require('lodash');
var IncomingType = require('./incomingType.model');

// Get list of incomingTypes
exports.index = function(req, res) {
  IncomingType.find(function (err, incomingTypes) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(incomingTypes);
  });
};

// Get a single incomingType
exports.show = function(req, res) {
  IncomingType.findById(req.params.id, function (err, incomingType) {
    if(err) { return handleError(res, err); }
    if(!incomingType) { return res.status(404).send('Not Found'); }
    return res.json(incomingType);
  });
};

// Creates a new incomingType in the DB.
exports.create = function(req, res) {
  IncomingType.create(req.body, function(err, incomingType) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(incomingType);
  });
};

// Updates an existing incomingType in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  IncomingType.findById(req.params.id, function (err, incomingType) {
    if (err) { return handleError(res, err); }
    if(!incomingType) { return res.status(404).send('Not Found'); }
    var updated = _.merge(incomingType, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(incomingType);
    });
  });
};

// Deletes a incomingType from the DB.
exports.destroy = function(req, res) {
  IncomingType.findById(req.params.id, function (err, incomingType) {
    if(err) { return handleError(res, err); }
    if(!incomingType) { return res.status(404).send('Not Found'); }
    incomingType.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}