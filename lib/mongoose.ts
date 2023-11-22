import mongoose from "mongoose";

let isConnected = false; //Variable to check conn status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL not found")

    if(isConnected) return console.log("Already connected to MOongoDB")

    try {
        await mongoose.connect(process.env.MONGODB_URL!);

        isConnected = true;

        console.log("Conected to MongoDB")
    } catch (error) {
        console.log(error);
    }
};