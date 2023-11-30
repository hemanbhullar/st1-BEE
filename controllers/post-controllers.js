const Post = require("../model/post");

// Create a new post
const createPost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const post = new Post({ title, content });
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (error) {
      res.status(500).json({message:"Error in creating a new post"});
    }
  };

// Retrieve all posts
const retrieveAll = async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message:"error in retrieving all posts"});
    }
};

// Retrieve a specific post by ID
const retrieve = async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      res.json(post);
    } catch (error) {
      res.status(500).json({message:"error in retrieving a specific post"});
    }
  };
  
  // Update a post by ID
  const update = async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.postId,
        req.body,
        { new: true }
      );
      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({message:"error in updatedPost"});
    }
  };
  
  // Delete a post by ID
  const deletePost = async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.postId);
      res.json(deletedPost);
    } catch (error) {
      res.status(500).json({message:"There is error in deleting a post"});
    }
  };

exports.createPost = createPost;
exports.retrieveAll = retrieveAll;
exports.update = update;
exports.retrieve = retrieve;
exports.deletePost = deletePost;

