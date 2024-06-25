import mongoose from "mongoose";
const uri = "mongodb+srv://bhattaraisushma260:sxCOcZRxSXl6xWwV@cluster0.2mlbkve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 export const connectDB = async () => {
    try
    {
    await  mongoose.connect(uri, {
 
    })
    console.log("Database connected successfully")}

    catch (error) {
        console.log("Error connecting to the database", error);
    }
    
}

