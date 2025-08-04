const jwt = require('jsonwebtoken');

const JWT_SECRET = "your_super_secret_key";

function createToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { createToken, verifyToken };