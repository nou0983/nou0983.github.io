import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import MessageItem from "./MessageItem";

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  renderMessages() {
    return this.props.messages.map(m => (
      <MessageItem
        key={m.userId._id}
        messageId={m._id}
        userId={m.userId._id}
        date={m.updatedAt}
        title={m.title}
        category={m.category}
        username={m.userId.username}
        profileImageUrl={m.userId.profileImageUrl}
        removeMessage={this.props.removeMessage.bind(this, m.userId._id, m._id)}
        isCorrectUser={this.props.currentUser === m.userId._id}
      />
    ));
  }

  render() {
    return <tbody>{this.renderMessages()}</tbody>;
  }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.auth.user.userId,
    messages: state.messages
  };
}

export default connect(
  mapStatetoProps,
  actions
)(MessageList);
