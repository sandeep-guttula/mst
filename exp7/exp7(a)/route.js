const express = require('express');
const routing = express.Router();
const notesController = require('../Controller/myNotes');
routing.get('/packages', notesController.packages);
routing.post('/bookpackage', notesController.bookpackage);
routing.all('*', notesController.invalid);
module.exports = routing;