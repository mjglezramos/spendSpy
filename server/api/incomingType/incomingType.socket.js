/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var IncomingType = require('./incomingType.model');

exports.register = function(socket) {
  IncomingType.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  IncomingType.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('incomingType:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('incomingType:remove', doc);
}