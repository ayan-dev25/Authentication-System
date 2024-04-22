const bcrypt = require('bcrypt');

const getHashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
  return hashedPassword;
}

const comparePasswords = async (plainPassword, hashedPassword) => {
  const isPasswordMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isPasswordMatch;
}

module.exports = {
  getHashPassword,
  comparePasswords
};