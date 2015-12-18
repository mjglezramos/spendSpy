/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var ExpenditureType = require('../api/expenditureType/expenditureType.model');
var IncomingType = require('../api/incomingType/incomingType.model');

IncomingType.find({}).remove(function (){
  IncomingType.create({
    name : "paysheet"
  }, {
    name : "saving"
  }, {
    name : "debt"
  }, {
    name : "payment"
  }, {
    name : "repayment"
  }, {
    name : "lottery"
  }, {
    name : "extra pay"
  });
});

ExpenditureType.find({}).remove(function (){
  ExpenditureType.create({
    name : "Food"
  }, {
    name : "Clothes"
  }, {
    name : "Taxi"
  }, {
    name : "Public Trasport"
  }, {
    name : "Celular"
  }, {
    name : "Internet"
  }, {
    name : "Ligth"
  }, {
    name : "Gas"
  }, {
    name : "Water"
  }, {
    name : "Renting"
  }, {
    name : "House Thing"
  }, {
    name : "Dinner"
  }, {
    name : "Launch"
  }, {
    name : "Gym"
  }, {
    name : "Cinema"
  }, {
    name : "Travel Transport"
  }, {
    name : "Travel Expenses"
  }, {
    name : "Leisure Time"
  }, {
    name : "Savings"
  }, {
    name : "Lottery"
  }, {
    name : "Drugstore"
  }, {
    name : "Bank Debts"
  }, {
    name : "Credit Cards"
  }, {
    name : "Insurance"
  }, {
    name : "Hotel"
  }, {
    name : "Present"
  });
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Incomings',
    info : 'The Incomings that the user has got'
  }, {  
    name : 'Expenditures',
    info : 'The Expenditures that the user has done'
  }, {
    name : 'Benefits',
    info : 'The Benefits that the user has got'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});