const express = require("express");
const jobRouter = express.Router();
const jobController = require("../controllers/Job")

jobRouter.post("/insert-many-jobs", jobController.insertManyJobs);
jobRouter.post("/", jobController.createJob);
jobRouter.get("/", jobController.getAllJobs);
jobRouter.get("/:id", jobController.getJobById);
jobRouter.put("/:id", jobController.updateJob);
jobRouter.delete("/:id", jobController.deleteJob);

module.exports = jobRouter;
