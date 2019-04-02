import React, { Component } from "react";
import requireAuth from "./hoc/requireAuth";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

class CommentForm extends Component {
  onSubmit = formProps => {
    this.props.createComment(
      formProps,
      this.props.currentUser,
      this.props.match.params.message_id,
      this.props.match.params.id
    );
  };

  renderAlert = (errorMessage, touched = true) => {
    if (errorMessage && touched) {
      return (
        <Alert dismissible variant="danger" className="mt-3">
          {errorMessage}
        </Alert>
      );
    }
  };

  renderInput = ({ label, input, type, meta }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          className="form-control"
          {...input}
          type={type}
          autoComplete="off"
        />
        {this.renderAlert(meta.error, meta.touched)}
      </div>
    );
  };

  render() {
    console.log(this.props);
    const {
      handleSubmit,
      history,
      removeError,
      errorMessage,
      reset
    } = this.props;

    history.listen(() => {
      removeError();
      reset();
    });

    return (
      <div>
        <header id="main-header" className="py-2 bg-success text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-pencil-alt" /> Create Comment
                </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="actions" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link
                  to={`/users/${this.props.match.params.id}/messages/${
                    this.props.match.params.message_id
                  }`}
                  className="btn btn-light btn-block"
                >
                  <i className="fas fa-arrow-left" /> Back To Post
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container min-section">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>Create a comment</h4>
                </div>
                <div className="card-body">
                  <form className="mt-2" onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                      name="text"
                      type="text"
                      label="Text"
                      component={this.renderInput}
                    />
                    <button className="btn btn-primary">
                      Create a comment
                    </button>
                    {errorMessage && this.renderAlert(errorMessage)}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errors.message,
    currentUser: state.auth.user.userId
  };
}

const validate = formProps => {
  const errors = {};

  if (!formProps.text) {
    errors.text = "You must enter a comment";
  }

  return errors;
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "createMessage", validate })(requireAuth(CommentForm)));
