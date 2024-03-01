const express = require('express');
const locationRouter = express.Router();
const locationController = require('../controllers/Location');

locationRouter.post('/add', locationController.createLocation);

module.exports = locationRouter;
