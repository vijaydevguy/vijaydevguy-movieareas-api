// npm install mongodb

import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI 
    );
    console.log("db working....");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
