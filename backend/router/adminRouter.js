const express = require('express');
const router = express.Router();
const AdminController = require("../controller/adminContreller")
// Admin login route (for simplicity)
router.post('/login', AdminController.postLogin);

module.exports = router;