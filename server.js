const express = require('express')
const authRoutes = require('./routes/auth/index');
const userRoutes = require('./routes/users/userRoute');
const bodyParser = require('body-parser');
const {PORT, MONGO_URL} = require('./config/config');
const { connectMongoDB } = require('./db/db');
const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/v1/auth',authRoutes);

app.use('/api/v1/users',userRoutes);

// Connect to MongoDB
  connectMongoDB(MONGO_URL)

// Start the server
const AUTH_PORT =  PORT || 3000;
app.listen(AUTH_PORT, () => {
    console.log(`Server started on ${AUTH_PORT}`);
})
