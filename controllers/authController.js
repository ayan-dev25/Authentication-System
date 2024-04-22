const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        // Simple validation
        if (!name || !email || !password) {
            return res.status(400).json({
                status: 400,
                message: "Please provide username, email, and password"
            });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: "User already exists"
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // new user creation
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // Return a success message
        res.status(201).json({
            status: 201,
            message: "User registered successfully",
            user: newUser
        });


    } catch (error) {
        // Return a error message
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Simple validation
        if (!email || !password) {
            return res.status(400).json({
                status: 400,
                message: "Invalid user credentials"
            });
        }

        // if the user  exists
        const currentUser = await User.findOne({ email });
        if (!currentUser) {
            return res.status(400).json({
                status: 400,
                message: "Invalid user credentials"
            });
        }

        // Compare passwords
        const isPasswordMatch = await bcrypt.compare(password, currentUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                status: 400,
                message: "Invalid user credentials"
            });
        }

        // Generate JWT token
        const token = await jwt.sign(
            {
                id: currentUser._id
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        console.log('Generated token:', token);
        // Return a success message
        res.status(201).json({
            status: 201,
            message: "User logged in successfully",
            authorization_token: token
        });

    } catch (error) {
        // Return a error message
        res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        })
    }
}


module.exports = { registerUser, loginUser } 