import express from "express";
import mongoose from "mongoose";
const app = express();

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL);

        app.on("error", (error) => {
            console.log("ERROR: ", error.message);
            
        });

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`)
        })


    } catch (error) {
        console.log(`MongoDB connection FAILED: ${error.message}`);
        process.exit(1);
    }
}
