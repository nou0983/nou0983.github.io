require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var authRoutes = require("./routes/auth");
var messagesRoutes = require("./routes/messages");
var auth = require("./middleware/auth");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/messages",
  auth.loginRequired,
  messagesRoutes
);

const PORT = process.env.PORT || 3090;

app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});
