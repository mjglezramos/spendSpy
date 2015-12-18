'use strict';

var _ = require('lodash');
var ExpenditureType = require('./expenditureType.model');

// Get list of expenditureTypes
exports.index = function(req, res) {
  ExpenditureType.find(function (err, expenditureTypes) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(expenditureTypes);
  });
};

// Get a single expenditureType
exports.show = function(req, res) {
  ExpenditureType.findById(req.params.id, function (err, expenditureType) {
    if(err) { return handleError(res, err); }
    if(!expenditureType) { return res.status(404).send('Not Found'); }
    return res.json(expenditureType);
  });
};

// Creates a new expenditureType in the DB.
exports.create = function(req, res) {
  ExpenditureType.create(req.body, function(err, expenditureType) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(expenditureType);
  });
};

// Updates an existing expenditureType in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ExpenditureType.findById(req.params.id, function (err, expenditureType) {
    if (err) { return handleError(res, err); }
    if(!expenditureType) { return res.status(404).send('Not Found'); }
    var updated = _.merge(expenditureType, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(expenditureType);
    });
  });
};

// Deletes a expenditureType from the DB.
exports.destroy = function(req, res) {
  ExpenditureType.findById(req.params.id, function (err, expenditureType) {
    if(err) { return handleError(res, err); }
    if(!expenditureType) { return res.status(404).send('Not Found'); }
    expenditureType.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}