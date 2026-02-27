import mongoose from "mongoose";
import dotenv from "dotenv";


export default async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(`error message : ${error.message}`)
        console.error("MongoDB connection error:", error);
    }
};
