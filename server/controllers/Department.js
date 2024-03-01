const Department = require("../models/Department");

const addDepartment = async (req, res) => {
    const { name } = req.body;

    try {
        // Check if the department with the given name already exists
        const existingDepartment = await Department.findOne({ name });

        if (existingDepartment) {
            return res.status(400).json({ status: "error", message: "Department already exists" });
        }

        // Create a new department
        const newDepartment = await Department.create({ name });

        res.status(201).json({ status: "ok", data: newDepartment });
    } catch (error) {
        console.error("Error adding department", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

const getAllDepartments = async (req, res) => {
    try {
        // Get all departments
        const departments = await Department.find();

        res.status(200).json({ status: "ok", data: departments });
    } catch (error) {
        console.error("Error fetching departments", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = {
    addDepartment,
    getAllDepartments,
};
