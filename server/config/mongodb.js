import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
  mongoose.connection.on("connnected", () => console.log("Database connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}`);
};

export default connectDB;
