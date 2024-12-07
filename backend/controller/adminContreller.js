const Admin = require("../models/admin");
exports.postLogin = async (req, res) => {
  const { email, password } = req.body; // In real-world use, hash and compare passwords
  const admin = await Admin.findOne({ email, password });
  if (!admin) return res.status(400).send("Invalid credentials");
  res.status(200).send("Admin logged in");
};
