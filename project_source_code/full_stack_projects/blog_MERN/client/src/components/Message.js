import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class Message extends Component {
  state = { message: null };

  async componentDidMount() {
    const message = await this.props.getMessage(
      this.props.match.params.id,
      this.props.match.params.message_id
    );
    this.setState({ message });
  }

  renderComments() {
    return this.state.message.comments.map(comment => {
      return (
        <div key={comment._id} className="row justify-content-between">
          <div className="col-md-6">
            {comment.text} - by <strong>{comment.username}</strong>
          </div>
          <div className="col-md-3">
            <Moment format="Do MMMM YYYY, h:mm:ss a">
              {this.state.message.createat}
            </Moment>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>{this.state.message && this.state.message.title}</h1>
              </div>
            </div>
          </div>
        </header>
        <section id="actions" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link
                  to={`/users/${this.props.match.params.id}/messages`}
                  className="btn btn-light btn-block"
                >
                  <i className="fas fa-arrow-left" /> Back To Posts
                </Link>
              </div>
              {this.state.message &&
                this.props.currentUser === this.props.match.params.id && (
                  <>
                    <div className="col-md-3">
                      <Link
                        className="btn btn-warning btn-block"
                        to={{
                          pathname: `/users/${
                            this.props.currentUser
                          }/messages/${
                            this.props.match.params.message_id
                          }/edit`,
                          state: { ...this.state }
                        }}
                      >
                        <i className="fas fa-check" /> Edit Post
                      </Link>
                    </div>
                    <div className="col-md-3">
                      <button
                        className="btn btn-danger btn-block"
                        onClick={() =>
                          this.props.removeMessage(
                            this.props.currentUser,
                            this.props.match.params.message_id
                          )
                        }
                      >
                        <i className="fas fa-trash" /> Delete Post
                      </button>
                    </div>
                  </>
                )}
            </div>
          </div>
        </section>

        <div className="min-section">
          {this.state.message && (
            <section id="details">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <h5 className="card-header">
                        Title: {this.state.message.title}
                      </h5>
                      <div className="card-body">
                        <p className="lead">
                          Author: {this.state.message.userId.username}
                        </p>
                        <p className="lead">
                          Category: {this.state.message.category}
                        </p>
                        <p>{this.state.message.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <div className="card">
                      <div className="card-header">
                        <div className="row align-items-center justify-content-between">
                          <div className="col-md-3">
                            <h5 className="mb-0">Comments</h5>
                          </div>
                          <div className="col-md-3">
                            <Link
                              className="btn btn-success btn-block"
                              to={{
                                pathname: `/users/${
                                  this.props.match.params.id
                                }/messages/${
                                  this.props.match.params.message_id
                                }/comments/new`,
                                state: { ...this.state }
                              }}
                            >
                              <i className="fas fa-check" /> Add Comment
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">{this.renderComments()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.auth.user.userId
  };
}

export default connect(
  mapStateToProps,
  actions
)(Message);
