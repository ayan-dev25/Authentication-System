const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;


module.exports = {PORT, MONGO_URL, JWT_SECRET};