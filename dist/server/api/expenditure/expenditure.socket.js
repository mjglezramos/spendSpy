/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Expenditure = require('./expenditure.model');

exports.register = function(socket) {
  Expenditure.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Expenditure.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('expenditure:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('expenditure:remove', doc);
}