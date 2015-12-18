'use strict';

var _ = require('lodash');
var Expenditure = require('./expenditure.model');

// Get list of expenditures
exports.index = function(req, res) {
  Expenditure.find(function (err, expenditures) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(expenditures);
  });
};

// Get a single expenditure
exports.show = function(req, res) {
  Expenditure.findById(req.params.id, function (err, expenditure) {
    if(err) { return handleError(res, err); }
    if(!expenditure) { return res.status(404).send('Not Found'); }
    return res.json(expenditure);
  });
};

// Creates a new expenditure in the DB.
exports.create = function(req, res) {
  Expenditure.create(req.body, function(err, expenditure) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(expenditure);
  });
};

// Updates an existing expenditure in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Expenditure.findById(req.params.id, function (err, expenditure) {
    if (err) { return handleError(res, err); }
    if(!expenditure) { return res.status(404).send('Not Found'); }
    var updated = _.merge(expenditure, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(expenditure);
    });
  });
};

// Deletes a expenditure from the DB.
exports.destroy = function(req, res) {
  Expenditure.findById(req.params.id, function (err, expenditure) {
    if(err) { return handleError(res, err); }
    if(!expenditure) { return res.status(404).send('Not Found'); }
    expenditure.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}