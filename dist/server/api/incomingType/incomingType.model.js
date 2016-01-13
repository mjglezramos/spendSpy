'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IncomingTypeSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('IncomingType', IncomingTypeSchema);