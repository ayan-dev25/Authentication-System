const mongoose = require('mongoose')

const connectMongoDB = async (MONGO_URL) => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

module.exports = { connectMongoDB }