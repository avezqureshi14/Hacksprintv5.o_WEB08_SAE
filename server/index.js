import express from "express"
import {connectToDatabase} from "./db/connection.js"
const app = express();


const PORT = 8800;
connectToDatabase();
app.listen(() => {
    console.log(`Server is running on PORT ${PORT}`)
})