const Industry = require("../models/Industry");

// Controller to add a new industry
const addIndustry = async (req, res) => {
    const { name } = req.body;

    try {
        // Check if the industry already exists
        const existingIndustry = await Industry.findOne({ name });

        if (existingIndustry) {
            return res.status(400).json({ status: "error", message: "Industry already exists" });
        }

        // Create a new industry
        const newIndustry = await Industry.create({ name });

        res.status(201).json({ status: "ok", data: newIndustry });
    } catch (error) {
        console.error("Error adding industry", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

// Controller to get all industries
const getAllIndustries = async (req, res) => {
    try {
        const industries = await Industry.find({});
        res.status(200).json({ status: "ok", data: industries });
    } catch (error) {
        console.error("Error fetching industries", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = {
    addIndustry,
    getAllIndustries,
};
