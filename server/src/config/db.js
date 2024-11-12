import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://gowthamchandranj:mongodbpass@cluster0.4lckv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(
      `MONGODB CONNECTED SUCCESSFULLY !! HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB CONNECTION ERROR ${error}`);
    process.exit(1);
  }
};

export default connectDB;
