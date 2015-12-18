'use strict';

var _ = require('lodash');
var Incoming = require('./incoming.model');

// Get list of incomings
exports.index = function(req, res) {
  Incoming.find(function (err, incomings) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(incomings);
  });
};

// Get a single incoming
exports.show = function(req, res) {
  Incoming.findById(req.params.id, function (err, incoming) {
    if(err) { return handleError(res, err); }
    if(!incoming) { return res.status(404).send('Not Found'); }
    return res.json(incoming);
  });
};

// Creates a new incoming in the DB.
exports.create = function(req, res) {
  Incoming.create(req.body, function(err, incoming) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(incoming);
  });
};

// Updates an existing incoming in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Incoming.findById(req.params.id, function (err, incoming) {
    if (err) { return handleError(res, err); }
    if(!incoming) { return res.status(404).send('Not Found'); }
    var updated = _.merge(incoming, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(incoming);
    });
  });
};

// Deletes a incoming from the DB.
exports.destroy = function(req, res) {
  Incoming.findById(req.params.id, function (err, incoming) {
    console.log("ID" + req.params.id);
    console.log("_ID" + req.params._id);
    if(err) { return handleError(res, err); }
    if(!incoming) { return res.status(404).send('Not Found'); }
    incoming.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}