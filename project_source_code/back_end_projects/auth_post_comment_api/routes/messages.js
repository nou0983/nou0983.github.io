var express = require("express");
var router = express.Router({ mergeParams: true });
var db = require("../models");
var helpers = require("../helpers/messages");
var auth = require("../middleware/auth");

router
  .route("/")
  .get(helpers.getMessages)
  .post(auth.ensureCorrectUser, helpers.createMessage);

router
  .route("/:message_id")
  .get(helpers.getMessage)
  .delete(auth.ensureCorrectUser, helpers.deleteMessage)
  .put(auth.ensureCorrectUser, helpers.editMessage);

router
  .route("/:message_id/comments") 
  .post(auth.ensureCorrectUser, helpers.createComment);

module.exports = router;
