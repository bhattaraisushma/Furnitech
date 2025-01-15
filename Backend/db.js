import mongoose from "mongoose";
const uri="mongodb+srv://bhattaraisushma260:nQ0YnkT1nH5h8gpA@cluster0.urgga.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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

