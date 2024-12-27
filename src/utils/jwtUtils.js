const jwt = require("jsonwebtoken");
require('dotenv').config()


const secretKey = process.env.JWT_SECRET

const generateToken = (data) => {
  return jwt.sign(data, secretKey, { expiresIn: "8h" });
};


const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
