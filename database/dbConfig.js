import mongoose from "mongoose";

const connectDb=async()=>{
    try {
        const connection=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB at ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}
export default connectDb;