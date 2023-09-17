const express = require("express");
const router = express.Router();
const blogController = require("../controller/BlogController");

//define routes
router.get("/blog-post", blogController.getAllPost);

router.get("/blog-post/:postId", blogController.getPostById);

router.post("/blog-post/:postId", blogController.createBlogPost);

router.put("/blog-post/:postId", blogController.updateBlog);

router.delete("/blog-post/:postId", blogController.deleteBlog);

module.exports = router;
