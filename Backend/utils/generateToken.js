//open standard used to share security information between two parties — a client and a server
//used for autheraization to authentication is same user is login ? is same 
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
