var mongoose = require("mongoose");
var User = require("./user");

var messageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 50
    },
    category: {
      type: String,
      required: true,
      maxLength: 30
    },
    body: {
      type: String,
      required: true,
      maxLength: 500
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ]
  },
  {
    timestamps: true
  },
  { usePushEach: true }
);

messageSchema.pre("remove", async function(next) {
  try {
    let user = await User.findById(this.userId);
    user.messages.remove(this._id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

var Message = mongoose.model("Message", messageSchema);
module.exports = Message;
