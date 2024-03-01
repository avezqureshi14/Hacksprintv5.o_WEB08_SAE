const express = require('express');
const linkedinRouter = express.Router();
const linkedInController = require('../controllers/Linkedin');

linkedinRouter.get('/linkedin-jobs', linkedInController.getLinkedInJobs);

module.exports = linkedinRouter;
