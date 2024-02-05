
const express = require("express");
const router = new express.Router();

const admin_controller = require("../controller/admin_controller");

// admin registration
router.post("/register/admin", admin_controller.register_admin);

router.post("/login/admin", admin_controller.login_admin);

module.exports = router