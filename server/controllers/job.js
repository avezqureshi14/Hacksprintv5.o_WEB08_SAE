const Job = require("../models/job");
const insertManyJobs = async (req, res) => {
    const jobsData = req.body;
    try {
        await Job.insertMany(jobsData);
        res.status(200).json({message:"Data inserted successfully"});
    } catch (error) {
        res.status(404).json({error:error});
    }    
};

const createJob = async (req, res) => {
    const jobData = req.body;

    try {
        const newJob = await Job.create(jobData);
        res.status(201).json({ status: "ok", data: newJob });
    } catch (error) {
        console.error("Error creating job", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ status: "ok", data: jobs });
    } catch (error) {
        console.error("Error fetching jobs", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

const getJobById = async (req, res) => {
    const jobId = req.params.id;

    try {
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ status: "error", message: "Job not found" });
        }
        res.status(200).json({ status: "ok", data: job });
    } catch (error) {
        console.error("Error fetching job by ID", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};


const updateJob = async (req, res) => {
    const jobId = req.params.id;
    const updatedJobData = req.body;

    try {
        const updatedJob = await Job.findByIdAndUpdate(jobId, updatedJobData, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ status: "error", message: "Job not found" });
        }
        res.status(200).json({ status: "ok", data: updatedJob });
    } catch (error) {
        console.error("Error updating job", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};


const deleteJob = async (req, res) => {
    const jobId = req.params.id;

    try {
        const deletedJob = await Job.findByIdAndDelete(jobId);
        if (!deletedJob) {
            return res.status(404).json({ status: "error", message: "Job not found" });
        }
        res.status(200).json({ status: "ok", message: "Job deleted successfully" });
    } catch (error) {
        console.error("Error deleting job", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = {
    insertManyJobs,
    createJob,
    getAllJobs,
    updateJob,
    deleteJob,
    getJobById
};
