const express = require('express');
const router = express.Router();
const helpers = require('../../helpers/users');
const passport = require('passport');

// @route   POST api/users/signup
// @desc    Register user / Returning JWT Token
// @access  Public
router.post('/signup', helpers.signUp);

// @route   GET api/users/signin
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/signin', helpers.signIn);

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
