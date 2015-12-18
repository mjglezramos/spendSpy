/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ExpenditureType = require('./expenditureType.model');

exports.register = function(socket) {
  ExpenditureType.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  ExpenditureType.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('expenditureType:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('expenditureType:remove', doc);
}