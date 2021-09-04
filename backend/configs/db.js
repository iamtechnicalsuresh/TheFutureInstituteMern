import mongoose from "mongoose";

let db;

const connectDB = async () => {
  if (process.env.NODE_ENV === "production") {
    db = process.env.MONGO_URL_PROD;
  } else {
    db = process.env.MONGO_URL_DEV;
  }

  try {
    const conn = await mongoose.connect(db);
    console.log(`Database Connected Successfully on ${conn.connection.host}`);
  } catch (error) {
    console.log(`Database not connected Successfully due to ${error}`);
  }
};

export default connectDB;
