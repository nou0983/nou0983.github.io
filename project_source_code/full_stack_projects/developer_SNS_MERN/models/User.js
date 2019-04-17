const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

// Create Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: "Profile"
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ]
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", function(next) {
  var user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt).then(
      function(hashedPasword) {
        user.password = hashedPasword;
        next();
      },
      function(err) {
        return next(err);
      }
    );
  });
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  // Check Password
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

module.exports = User = mongoose.model("User", userSchema);
