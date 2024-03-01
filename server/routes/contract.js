const express = require('express');
const contractRouter = express.Router();
const contractController = require('../controllers/Contract');

contractRouter.post('/add', contractController.createContract);

module.exports = contractRouter;
