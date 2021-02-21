import mongoose from 'mongoose';
import 'dotenv/config.js';

const { MONGO_URL, MONGO_URL_TEST, NODE_ENV } = process.env;
const connectDb = () => {
  mongoose
    .connect(NODE_ENV === 'test' ? MONGO_URL_TEST : MONGO_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(console.log('Database Connected'));
};

export default connectDb;
