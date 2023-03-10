const jwt = require("jsonwebtoken");
module.exports = {
  generateJWT(payload) {
    const token = jwt.sign(payload, process.env.SECRET_SIGNATURE, {
      expiresIn: "1h",
    });
    return token;
  },
};
