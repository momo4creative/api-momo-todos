const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
};

const verifyToken = (req, res, next) => {
  // console.log(req.headers);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json("Anda tidak mempunyai akses");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json("Hak akses kadaluarsa");
    req.user = user;
  });
  next();
};

module.exports = {
  generateToken,
  verifyToken,
};
