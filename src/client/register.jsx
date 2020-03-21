import React from "react";
import Joi from "joi-browser";
import Form from "./common/form.jsx";

class Register extends Form {
  state = {
    //controlled value cannot be null or unidentified...
    //therefore initiliaze it to an empty string or some value you find from the server
    data: { username: "", password: "", email: "" },
    errors: {},
    checked: false
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5),
    email: Joi.string()
      .required()
      .label("Email")
      .min(5)
      .email()
  };

  doSubmit = () => {
    //Register the user
    console.log("hey im register button");
  };

  render() {
    return (
      <div
        className="m-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <h1>Create croissant account</h1>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email")}
          {this.renderRegisterButton(this.state.checked, "Register")}
          {this.renderCheckBox("I agree to the terms and service.")}
        </form>
      </div>
    );
  }
}

export default Register;
