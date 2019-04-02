import React, { Component } from "react";
import requireAuth from "./hoc/requireAuth";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "../actions";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

class MessageForm extends Component {
  componentDidMount() {
    if (this.props.location.state) {
      this.props.initialize({
        title: this.props.location.state.message.title,
        category: this.props.location.state.message.category,
        body: this.props.location.state.message.body
      });
    }
  }

  onSubmit = formProps => {
    if (this.props.buttonText === "Create") {
      this.props.createMessage(formProps);
    } else {
      this.props.editMessage(
        formProps,
        this.props.match.params.id,
        this.props.match.params.message_id
      );
    }
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
    if (type === "textarea") {
      return (
        <div className="form-group">
          <label>{label}</label>
          <textarea
            className="form-control"
            {...input}
            type={type}
            autoComplete="off"
            cols="30"
            rows="5"
          />
        </div>
      );
    } else {
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
    }
  };

  render() {
    const {
      handleSubmit,
      history,
      removeError,
      errorMessage,
      buttonText,
      reset
    } = this.props;

    history.listen(() => {
      removeError();
      reset();
    });

    return (
      <div>
        <header id="main-header" class="py-2 bg-warning text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1>
                  <i class="fas fa-pencil-alt" /> {buttonText} Post
                </h1>
              </div>
            </div>
          </div>
        </header>
        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <Link
                  to="/users/:id/messages"
                  class="btn btn-success btn-block"
                >
                  <i class="fas fa-plus" /> View Posts
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div class="container min-section">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header">
                  <h4>{buttonText} a post</h4>
                </div>
                <div class="card-body">
                  <form className="mt-2" onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                      name="title"
                      type="text"
                      label="Title"
                      component={this.renderInput}
                    />
                    <Field
                      name="category"
                      type="text"
                      label="Category"
                      component={this.renderInput}
                    />
                    <Field
                      name="body"
                      type="textarea"
                      label="Body"
                      component={this.renderInput}
                    />
                    <button className="btn btn-primary">
                      {buttonText} a post
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
    errorMessage: state.errors.message
  };
}

const validate = formProps => {
  const errors = {};

  if (!formProps.title) {
    errors.title = "You must enter a title";
  }
  if (!formProps.category) {
    errors.category = "You must choose a category";
  }
  if (!formProps.body) {
    errors.body = "You must enter a body";
  }

  return errors;
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "createMessage", validate })(requireAuth(MessageForm)));
