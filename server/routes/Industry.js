const express = require("express");
const industryRouter = express.Router();
const IndustryController = require("../controllers/Industry");

// Create a new blog
industryRouter.post("/add", IndustryController.addIndustry);
industryRouter.post("/", IndustryController.getAllIndustries);
module.exports = industryRouter;
