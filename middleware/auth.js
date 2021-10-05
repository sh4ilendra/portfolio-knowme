const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //Get json web token from header
  const token = req.header("x-auth-token");

  //Check in case token not found
  if (!token) {
    return res.status(401).json({ msg: "No token found. Not authorized" });
  }

  //Verify token
  try {
    const decodedToken = jwt.verify(token, config.get("jwtSecretKey"));
    // protection for user id, only id is sent from middleware for further processing
    req.user = decodedToken.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
