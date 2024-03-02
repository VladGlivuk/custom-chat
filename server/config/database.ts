import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (mongoURI) {
      await connect(mongoURI);
      console.log('MongoDB connected...');
    } else {
      console.log('MongoDB URI is not defined');
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('An unknown error occurred');
    }
    process.exit(1);
  }
};

export default connectDB;
