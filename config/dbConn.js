import mongoose from "mongoose";


mongoose.set("strictQuery", false);

const connectToDB = async () => {
   try {
    const { connection } = await mongoose.connect(
      'mongodb+srv://vinay:22112002@cluster0.qyxgam9.mongodb.net/learn'|| `mongodb://127.0.0.1:27017/lms`
    );

    if (connection) {
      console.log(`Connected to MongoDB: ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
