const PdfDetails = require("../models/pdf");
const upload = require("../middlewares/multerMiddleware");
const fs = require("fs");
const pdf = require("pdf-parse");

const uploadFile = async (req, res) => {
    console.log(req.file);
    const title = req.body.title;
    const fileName = req.file.filename;

    try {
        const pdfFilePath = `./files/${fileName}`;

        const pdfFile = fs.readFileSync(pdfFilePath);
        const parsedData = await pdf(pdfFile);
        const skillsIndex = parsedData.text.indexOf("SKILLS");
        const nextSectionIndex = parsedData.text.indexOf("EXPERIENCE", skillsIndex);
        const skillsSection = parsedData.text.substring(skillsIndex, nextSectionIndex);
        await PdfDetails.create({ title: title, pdf: fileName, skillsSection: skillsSection });
        console.log(skillsSection)
        res.status(200).json({ status: "ok", extractedData: skillsSection });
    } catch (error) {
        console.error("Error uploading file", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

const getFiles = async (req, res) => {
    try {
        const data = await PdfDetails.find({});
        res.status(200).json({ status: "ok", data: data });
    } catch (error) {
        console.error("Error fetching files", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};

const successMessage = (req, res) => {
    res.send("Success!!!!!!");
};

module.exports = {
    uploadFile,
    getFiles,
    successMessage,
};
