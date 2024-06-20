import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectMongooseDB = async () => {
  try {
    if (process.env.NODE_ENV === 'DEV') {
      const dbData = mongoose.connect(process.env.MONGO_LOCAL);
      console.log('MONGO Local DB connected👍!!!');
    } else {
      const dbData = mongoose.connect(process.env.MONGO_CLOUD);
      console.log('MONGO Cloud DB connected 👍!!!');
    }
  } catch (err) {
    console.log('Error in DB😒', err);
  }
};

export { connectMongooseDB };
