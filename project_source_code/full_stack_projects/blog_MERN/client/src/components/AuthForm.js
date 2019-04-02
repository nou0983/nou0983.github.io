import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import * as actions from "../actions";

class AuthForm extends Component {
  onSubmit = formProps => {
    this.props.authUser(formProps, this.props.type);
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
    const {
      handleSubmit,
      buttonText,
      type,
      errorMessage,
      history,
      removeError,
      reset
    } = this.props;

    history.listen(() => {
      removeError();
      reset();
    });

    return (
      <div>
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-user" /> Blogen Admin
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row" />
          </div>
        </section>

        <div className="container mt-5 min-section">
          <div className="row">
            <div class="col-md-6 mx-auto">
              <div class="card">
                <div class="card-header">
                  <h4>Account {buttonText}</h4>
                </div>
                <div class="card-body">
                  <form className="mt-2" onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                      name="email"
                      type="text"
                      label="Email"
                      component={this.renderInput}
                    />
                    <Field
                      type="password"
                      name="password"
                      label="Password"
                      component={this.renderInput}
                    />
                    {type === "signup" && (
                      <div>
                        <Field
                          name="username"
                          type="text"
                          label="Username"
                          component={this.renderInput}
                        />
                        <Field
                          name="profileImageUrl"
                          type="text"
                          label="Profile Image"
                          component={this.renderInput}
                        />
                      </div>
                    )}
                    <button className="btn btn-primary btn-block">
                      {buttonText}
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

const validate = formProps => {
  const errors = {};

  if (!formProps.email) {
    errors.email = "You must enter your email";
  }

  if (!formProps.username) {
    errors.username = "You must enter your username";
  }

  if (!formProps.password) {
    errors.password = "You must enter your password";
  }

  return errors;
};

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: "auth", validate })
)(AuthForm);
