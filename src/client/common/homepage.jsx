import React from "react";
import Joi from "joi-browser";
import Form from "./form.jsx";

class HomePage extends Form {
  state = {
    //controlled value cannot be null or unidentified...
    //therefore initiliaze it to an empty string or some value you find from the server
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
      .min(5)
  };

  doSubmit = () => {
    //login the user
  };

  render() {
    return (
      <div className="row">
        <h1>Log in to Croissant</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default HomePage;
