import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Database Connected'));

    // Removed deprecated options useNewUrlParser and useUnifiedTopology
    await mongoose.connect(`${process.env.MONGODB_URI}/edumelms`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
