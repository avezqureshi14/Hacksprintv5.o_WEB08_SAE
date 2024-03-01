const express = require("express");
const router = express.Router();
const pdfController = require("../controllers/Pdf");
const upload = require("../middlewares/multerMiddleware");

router.use(express.json());
const cors = require("cors");
router.use(cors());
router.use("/files", express.static("files"));

router.post("/upload-files", upload.single("file"), pdfController.uploadFile);
router.get("/get-files", pdfController.getFiles);
router.get("/", pdfController.successMessage);

module.exports = router;
