const express = require("express");
const employmentRouter = express.Router();
const EmploymentController = require("../controllers/Employment");

employmentRouter.post("/add", EmploymentController.addEmployment);
employmentRouter.post("/", EmploymentController.getAllEmployments);
module.exports = employmentRouter;
