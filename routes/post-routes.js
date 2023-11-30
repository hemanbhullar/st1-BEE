const express = require("express");

const router = express.Router();

const Post = require("../model/post");
const postController = require("../controllers/post-controllers");

router.post("/",postController.createPost);
router.get("/",postController.retrieveAll);
router.get("/:postId",postController.retrieve);
router.put("/:postId",postController.update);
router.delete("/:postId",postController.deletePost);

module.exports = router;