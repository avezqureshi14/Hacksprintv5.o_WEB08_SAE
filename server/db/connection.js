const mongoose = require("mongoose");

const mongoUrl =
    "mongodb+srv://hackSprint:hackSprint@cluster0.1iywh3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
    .connect(mongoUrl)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((e) => console.log(e));
