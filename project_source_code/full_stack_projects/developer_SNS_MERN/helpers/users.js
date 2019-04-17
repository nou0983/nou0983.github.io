var User = require("../models/User");
var jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

// Load Input Validation
const validateRegisterInput = require("../validation/signup");
const validateLoginInput = require("../validation/signin");

//Sign Up Logic
exports.signUp = function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm" // Default
      });

      User.create({ ...req.body, avatar })
        .then(function(user) {
          // Create JWT Payload
          const payload = { id: user.id, name: user.name, avatar: user.avatar };

          // Sign Token
          jwt.sign(
            payload,
            process.env.SECRET_KEY,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );         
        })
        .catch(function(err) {
          res.status(400).json(err);
        });
    }
  });
};

//Sign In Logic
exports.signIn = function(req, res) {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    user.comparePassword(password, function(err, isMatch) {
      if (isMatch) {
        // User Matched
        // Create JWT Payload
        const payload = { id: user.id, name: user.name, avatar: user.avatar };

        // Sign Token
        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
};
