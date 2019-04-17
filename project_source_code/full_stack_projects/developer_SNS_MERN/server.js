require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

const usersRoute = require("./routes/api/users");
const profileRoute = require("./routes/api/profile");
const postsRoute = require("./routes/api/posts");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// DB Config
const db = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose
  .connect(db, { useNewUrlParser: true, keepAlive: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./middlewares/passport")(passport);

// Use Routes
app.use("/api/users", usersRoute);
app.use("/api/profile", profileRoute);
app.use("/api/posts", postsRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
