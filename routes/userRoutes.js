const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");

// Define routes for user operations
router.get("/users", UserController.getAllUsers);
router.get("/users/:userId", UserController.getUserById);
router.post("/users", UserController.createUser);
router.put("/users/:userId", UserController.updateUser);
router.delete("/users/:userId", UserController.deleteUser);

module.exports = router;
