const Location = require("../models/location");

const createLocation = async (req, res) => {
    const location = req.body;

    try {
        const newLocation = await Location.create(location);
        res.status(201).json({ status: "ok", data: newLocation });
    } catch (error) {
        console.error("Error creating Location", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};
const getLocation = async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json({ status: "ok", data: locations });
    } catch (error) {
        console.error("Error creating Location", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = {
    createLocation,
    getLocation
}