'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExpenditureSchema = new Schema({
  	date : Date,
	type : String,
	price : Number,
	description : String
});

module.exports = mongoose.model('Expenditure', ExpenditureSchema);