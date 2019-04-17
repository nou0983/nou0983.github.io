import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Alert } from "react-bootstrap";
import axios from "axios";

class App extends Component {
  onSubmit = async formProps => {
    try {    
      await axios.post(`/api/send`, formProps);      
    } catch (e) {
      console.log(e);
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
          <textarea className="form-control" {...input} autoComplete="off" />
          {this.renderAlert(meta.error, meta.touched)}
        </div>
      );
    }

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
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            type="text"
            name="name"
            label="Name"
            component={this.renderInput}
          />
          <Field
            type="text"
            name="email"
            label="Email"
            component={this.renderInput}
          />
          <Field
            name="message"
            label="Message"
            type="textarea"
            component={this.renderInput}
          />
          <button className="btn btn-primary">Creat Post</button>
        </form>
        {this.renderAlert(this.props.errorMessage)}
      </div>
    );
  }
}

const validate = formProps => {
  const errors = {};

  if (!formProps.name) {
    errors.name = "You must enter your name";
  }

  if (!formProps.email) {
    errors.email = "You must enter your email";
  }

  if (!formProps.message) {
    errors.message = "You must fill out a message";
  }

  return errors;
};

export default reduxForm({ form: "sendEmail", validate })(App);
