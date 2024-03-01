const Contract = require("../models/contract");

const createContract = async (req, res) => {
    const contract = req.body;

    try {
        const newContract = await Contract.create(contract);
        res.status(201).json({ status: "ok", data: newContract });
    } catch (error) {
        console.error("Error creating Contract", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

module.exports = {
    createContract
}