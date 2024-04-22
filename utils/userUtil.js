const User = require('../models/userModel')

const getAllUsers = async () => {
    try {
        // Fetch all users from the database
        const users = await User.find({});
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        return [];
      }
}

const getAllActiveUsers = async () => {
    try {
        // Fetch all active users from the database
        const activeUsers = await User.find({ active: true });
        return activeUsers;
      } catch (error) {
        console.error("Error fetching active users:", error);
        return [];
      }
}

const getUserByEmail = async (email) => {
    try {
        // Fetch user by email from the database
        const user = await User.findOne({ email });
        return user;
      } catch (error) {
        console.error("Error fetching user:", error);
        return [];
      }
}

module.exports = { getAllUsers, getAllActiveUsers, getUserByEmail }

