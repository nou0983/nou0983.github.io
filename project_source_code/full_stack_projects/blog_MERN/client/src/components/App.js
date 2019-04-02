import React, { Component } from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import AuthForm from "./AuthForm";
import MessageForm from "./MessageForm";
import Message from "./Message";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import MessageTimeline from "./MessageTimeline";
import Footer from "./Footer";
import CommentForm from "./CommentForm";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={props => {
                return <Welcome currentUser={this.props.currentUser} />;
              }}
            />
            <Route
              path="/signup"
              exact
              render={props => {
                return (
                  <AuthForm
                    buttonText="Sign Up"
                    heading="New to Wabler?"
                    type="signup"
                    errorMessage={this.props.errorMessage}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/signin"
              exact
              render={props => {
                return (
                  <AuthForm
                    buttonText="Sign In"
                    heading="Welcome Back!"
                    type="signin"
                    errorMessage={this.props.errorMessage}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/users/:id/messages"
              exact
              component={MessageTimeline}
            />
            <Route
              path="/users/:id/messages/new"
              exact
              render={props => {
                return <MessageForm buttonText="Create" {...props} />;
              }}
            />
            <Route
              path="/users/:id/messages/:message_id"
              exact
              component={Message}
            />
            <Route
              path="/users/:id/messages/:message_id/edit"
              exact
              render={props => {
                return <MessageForm buttonText="Edit" {...props} />;
              }}
            />
            <Route
              path="/users/:id/messages/:message_id/comments/new"
              exact
              component={CommentForm}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStatetoProps(state) {
  return {
    currentUser: state.auth,
    errorMessage: state.errors.message
  };
}

export default connect(
  mapStatetoProps,
  null
)(App);
