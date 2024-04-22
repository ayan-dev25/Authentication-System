const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config')

const generateToken = (payload, expiresIn = '1h') => {
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn});
    return token;
}

const verifyToken = (token) => {
    try {
        const decodedData = jwt.verify(token,JWT_SECRET);
        return decodedData;
    } catch (error) {
        console.log('Invalid Token Error : ',error)
        return null
    }
}

module.exports = {
    generateToken,
    verifyToken
  };