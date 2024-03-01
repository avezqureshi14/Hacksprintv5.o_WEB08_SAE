const express = require("express");
const departmentRouter = express.Router();
const DepartmentController = require("../controllers/Department");

departmentRouter.post("/add", DepartmentController.addDepartment);
departmentRouter.post("/", DepartmentController.getAllDepartments);
module.exports = departmentRouter;
