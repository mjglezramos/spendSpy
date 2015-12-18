'use strict';

var express = require('express');
var controller = require('./expenditure.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:_id', controller.destroy);

module.exports = router;