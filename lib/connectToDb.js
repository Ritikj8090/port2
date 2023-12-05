
import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED_TO_DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDb;
