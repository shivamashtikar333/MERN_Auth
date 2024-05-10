import mongoose from 'mongoose';

const connectDB = (url) => {
    if (!url) {
        console.error("MongoDB connection URL is not provided");
        return;
    }

    mongoose.set('strictQuery', true);
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}

export default connectDB;
