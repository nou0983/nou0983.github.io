var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/auth", {
    useNewUrlParser: true,
    keepAlive: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

module.exports.User = require("./user");
module.exports.Message = require("./message");
module.exports.Comment = require("./comment");