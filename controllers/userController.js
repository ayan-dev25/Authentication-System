const { getAllUsers, getAllActiveUsers, getUserByEmail } = require('../utils/userUtil');

const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getAllActiveUsersController = async (req, res) => {
    try {
        const activeUsers = await getAllActiveUsers();
        res.status(200).json(activeUsers);
    } catch (error) {
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getSpecificUserController = async (req, res) => {
    try {
        if (!req.params) {
            console.log('No query found')
            res.status(500).json({ message: "Internal server error" })
        }
        const { email } = req.params;
        const users = await getUserByEmail(email);
        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = {getAllUsersController, getAllActiveUsersController , getSpecificUserController}