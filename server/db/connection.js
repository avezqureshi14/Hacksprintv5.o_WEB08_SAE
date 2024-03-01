import mongoose from "mongoose";


export const connectToDatabase = async () => {
    await mongoose.connect("mongodb+srv://hackSprint:hackSprint@cluster0.1iywh3w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("Connected to Database");
        })
        .catch((error) => {
            console.log(error);
        })
}