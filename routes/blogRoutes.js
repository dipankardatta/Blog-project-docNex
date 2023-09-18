const express = require("express");
const router = express.Router();
const blogController = require("../controller/BlogController");
const validateToken = require("../middleware/validateToken");

//define routes
router.use(validateToken);

router.get("/blog-post", blogController.getAllPost);

router.get("/blog-post/:id", blogController.getPostById);

router.post("/blog-post/", blogController.createBlogPost);

router.put("/blog-post/:id", blogController.updateBlog);

router.delete("/blog-post/:id", blogController.deleteBlog);

module.exports = router;
