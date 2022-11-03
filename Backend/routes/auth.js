const authController = require("../Controllers/authControllers");

const router = require("express").Router();

//Register
router.post("/register", authController.registerUser);

//Login
router.post("/login", authController.loginUser);

//refresh
router.post("/refresh", authController.requestRefreshToken);

module.exports = router;