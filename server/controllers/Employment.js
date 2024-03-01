const Employment = require("../models/Employment");

const addEmployment = async (req, res) => {
    const { name } = req.body;

    try {
        // Check if the Employment with the given name already exists
        const existingEmployment = await Employment.findOne({ name });

        if (existingEmployment) {
            return res.status(400).json({ status: "error", message: "Employment already exists" });
        }

        // Create a new Employment
        const newEmployment = await Employment.create({ name });

        res.status(201).json({ status: "ok", data: newEmployment });
    } catch (error) {
        console.error("Error adding Employment", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

const getAllEmployments = async (req, res) => {
    try {
        // Get all Employments
        const Employments = await Employment.find();

        res.status(200).json({ status: "ok", data: Employments });
    } catch (error) {
        console.error("Error fetching Employments", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = {
    addEmployment,
    getAllEmployments,
};
