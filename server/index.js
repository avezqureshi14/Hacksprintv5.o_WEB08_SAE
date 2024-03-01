import express from "express"
import fileUpload from "express-fileupload";
import PdfParse from "pdf-parse";
import {connectToDatabase} from "./db/connection.js"
const app = express();

app.use("/",express.static("public"));

const PORT = 8800;
connectToDatabase();
app.listen(() => {
    console.log(`Server is running on PORT ${PORT}`)
})