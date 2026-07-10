import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URL, "The mongodb ui")
    await mongoose.connect(process.env.MONGO_URL || process.env.MONGO_ONLINE_URL || "mongodb://localhost:27017/SSI");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message); 
    process.exit(1);
  }
};

export default connectDB;
