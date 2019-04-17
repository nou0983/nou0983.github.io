const express = require("express");
const router = express.Router();
const helpers = require("../../helpers/posts");
const auth = require("../../middlewares/auth");

// @route   GET api/posts/users
// @desc    Get posts
// @access  Public
router.get("/users", helpers.getPosts);

router
  .route("/users/:id/:post_id")
  // @route   GET api/posts/users/:id/:post_id
  // @desc    Get post by id
  // @access  Public
  .get(helpers.getPost)
  // @route   POST api/posts/users/:id/:post_id
  // @desc    Create post
  // @access  Private
  .post(auth.loginRequired, auth.ensureCorrectUser, helpers.createPost)
  // @route   DELETE api/posts/users/:id/:post_id
  // @desc    Delete post
  // @access  Private
  .delete(auth.loginRequired, auth.ensureCorrectUser, helpers.deletePost);

// @route   POST api/posts/users/:id/:post_id/like
// @desc    Like post
// @access  Private
router.post(
  "/users/:id/:post_id/like",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.likePost
);

// @route   POST api/posts/users/:id/:post_id/unlike
// @desc    Unlike post
// @access  Private
router.post(
  "/users/:id/:post_id/unlike",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.unlikePost
);

// @route   POST api/posts/users/:id/:post_id/comments
// @desc    Add comment to post
// @access  Private
router.post(
  "/users/:id/:post_id/comments",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.createComment
);

// @route   DELETE api/posts/users/:id/:post_id/comments/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete(
  "/users/:id/:post_id/comments/:comment_id",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.deleteComment
);

module.exports = router;
