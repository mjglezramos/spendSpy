/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Incoming = require('./incoming.model');

exports.register = function(socket) {
  Incoming.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Incoming.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('incoming:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('incoming:remove', doc);
}