const asyncHandler = require("express-async-handler");
const Blog = require("../model/blogModel");

const getAllPost = asyncHandler(async (req, res) => {
  const blogs = await Blog.findAll();
  res.status(200).json(blogs);
});

const getPostById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByPk(id);
  if (!blog) {
    res.status(400);
    throw new error("Blog post Not found");
  }
});

const createBlogPost = asyncHandler(async (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    res.status(400);
    throw new Error("All fields are mandate");
  }

  const blog = await Blog.create({
    title,
    content,
    author,
  });
  res.status(201).json(blog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  const blog = await Blog.findByPk(id);
  if (!blog) {
    res.status(400);
    throw new error("Blog post not fund");
  }

  blog.title = title;
  blog.content = content;
  blog.author = author;
  await blog.save();

  res.status(200).json(blog);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByPk(id);
  if (!blog) {
    res.status(400);
    throw new Error("Blog post not found");
  }

  await blog.destroy();
  res.status(200).json();
});

module.exports = {
  getAllPost,
  getPostById,
  createBlogPost,
  updateBlog,
  deleteBlog,
};
