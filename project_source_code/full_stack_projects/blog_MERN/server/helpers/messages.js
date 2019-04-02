var db = require("../models");

exports.getMessages = function(req, res, next) {
  db.Message.find({})
    .sort({ createAt: "desc" })
    .populate("userId", { username: true, profileImageUrl: true })
    .populate("comments", { text: true, username: true })
    .then(function(messages) {
      res.json(messages);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
};

exports.createMessage = async function(req, res, next) {
  try {
    let foundUser = await db.User.findById(req.params.id);
    let message = await db.Message.create({
      title: req.body.title,
      category: req.body.category,
      body: req.body.body,
      userId: foundUser._id
    });
    foundUser.messages.push(message._id);
    await foundUser.save();
    let foundMessage = await db.Message.findById(message._id).populate(
      "userId",
      { username: true, profileImageUrl: true }
    );
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

exports.getMessage = async function(req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id)
      .populate("userId", { username: true, profileImageUrl: true })
      .populate("comments", { text: true, username: true });
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

exports.deleteMessage = async function(req, res, next) {
  try {
    let foundMessage = await db.Message.findById(req.params.message_id);
    await foundMessage.remove();
    return res.status(200).json(foundMessage);
  } catch (err) {
    return next(err);
  }
};

exports.editMessage = async function(req, res, next) {
  try {
    let updatedMessage = await db.Message.findByIdAndUpdate(
      req.params.message_id,
      {
        title: req.body.title,
        category: req.body.category,
        body: req.body.body
      }
    );
    return res.status(200).json(updatedMessage);
  } catch (err) {
    return next(err);
  }
};

exports.createComment = async function(req, res, next) {
  try {
    let foundUser = await db.User.findById(req.params.id);
    let comment = await db.Comment.create({
      text: req.body.text,
      username: foundUser.username,
      messageId: req.params.message_id,
      userId: foundUser._id
    });
    foundUser.comments.push(comment._id);
    await foundUser.save();
    let foundMessage = await db.Message.findById(req.params.message_id);
    foundMessage.comments.push(comment._id);
    await foundMessage.save();
    let foundComment = await db.Comment.findById(comment._id).populate(
      "messageId",
      { text: true, username: true }
    );
    return res.status(200).json(foundComment);
  } catch (err) {
    return next(err);
  }
};
