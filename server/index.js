const express = require("express");
const cors = require("cors");
const app = express();
const mongooseConnection = require("./db/connection");
const pdfRouter = require("./routes/Pdf");
const userRouter = require("./routes/User");
const linkedinRouter = require("./routes/Linkedin");
const jobRouter = require("./routes/Job");
const contractRouter = require("./routes/Contract");
const locationRouter = require("./routes/Location");
const aiRouter = require("./routes/ai-service");
app.use(cors());
app.use(express.json());
app.use("/pdf", pdfRouter);
app.use("/user", userRouter)
app.use("/external-api-jobs", linkedinRouter)
app.use("/jobs",jobRouter)
app.use("/location",locationRouter)
app.use("/contract",contractRouter)
app.use("/ai",aiRouter)

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log("Server Started");
});
