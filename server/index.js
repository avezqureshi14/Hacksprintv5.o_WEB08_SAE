const express = require("express");
const app = express();
const mongooseConnection = require("./db/connection");
const pdfRouter = require("./routes/Pdf");
const industryRouter = require("./routes/Industry");
const departmentRouter = require("./routes/Department");
const employmentRouter = require("./routes/Employment");
const userRouter = require("./routes/User");

app.use("/pdf", pdfRouter);
app.use("/industry", industryRouter);
app.use("/department", departmentRouter);
app.use("/employment", employmentRouter);
app.use("/user", userRouter)

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log("Server Started");
});
