const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const validateToken = require("../middleware/validateToken");

// Define routes for user operations

router.post("/register", UserController.createUser);

router.post("/login", UserController.loginUser);

router.get("/current", validateToken, UserController.currentUser);

module.exports = router;
