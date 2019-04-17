const express = require("express");
const router = express.Router();
const auth = require("../../middlewares/auth");
const helpers = require("../../helpers/profile");

// @route   GET api/profile/users
// @desc    Get all profiles
// @access  Public
router.get("/users", helpers.getProfiles);

router
  .route("/users/:id")
  // @route   GET api/profile/users/:id
  // @desc    Get profile by user ID
  // @access  Public
  .get(helpers.getProfile)
  // @route   POST api/profile/users/:id
  // @desc    Create or edit user profile
  // @access  Private
  .post(auth.loginRequired, auth.ensureCorrectUser, helpers.createEditProfile)
  // @route   DELETE api/profile/users/:id
  // @desc    Delete user and profile
  // @access  Private
  .delete(
    auth.loginRequired,
    auth.ensureCorrectUser,
    helpers.deleteUserProfile
  );

// @route   GET api/profile/handles/:handle
// @desc    Get profile by handle
// @access  Public
router.get("/handles/:handle", helpers.getProfileByHandle);

// @route   POST api/profile/users/:id/experience
// @desc    Add experience to profile
// @access  Private
router.post(
  "/users/:id/experience",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.addExperience
);

// @route   POST api/profile/users/:id/education
// @desc    Add education to profile
// @access  Private
router.post(
  "/users/:id/education",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.addEducation
);

// @route   DELETE api/profile/users/:id/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  "/users/:id/experience/:exp_id",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.deleteExperience
);

// @route   DELETE api/profile/users/:id/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete(
  "/users/:id/education/:edu_id",
  auth.loginRequired,
  auth.ensureCorrectUser,
  helpers.deleteEducation
);

module.exports = router;
