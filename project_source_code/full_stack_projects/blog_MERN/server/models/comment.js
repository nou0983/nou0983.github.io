var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 100
    },
    username: {
      type: String     
    },
    messageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"      
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"      
    },
  },
  { usePushEach: true }
);

module.exports = mongoose.model("Comment", commentSchema);
