import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI); // <-- fixed here
        console.log(`MongoDB Connected: ${conn.connection.host}`); 
    } catch (error) {
        console.log ("error connecting to MongoDB:", error);
    }
}