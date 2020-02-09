import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input.jsx";

class Form extends Component {
  state = { data: {}, errors: {}, checked: {} };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    //if theres no errors return null
    if (!error) return null;
    //otherwise we have to get the array and map it to an object
    const errors = {};
    //itterate over the array to an object could also use map but might be complicated for people like me
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    //same approach in validate method, but we only want to validate one input field each
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    //cant validate our current schema cause our schemna takes two properties, so we need to make a sub schema
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;

    //this code is the same as above
    //if (error) return null;
    //return error.details[0].message;
  };

  handleSubmit = e => {
    //prevent browser reload
    e.preventDefault();

    const errors = this.validate();
    //instead of null we use an empty object
    this.setState({ errors: errors || {} });
    //wont call the server on error
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    //we need to do validation but we dont wanna call validate() cause that will validate the entire form instead of the specific input field for example username.
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    //if errormessage is trucy do this, we will store it into our errors object and set it to the errormessage from our validation function
    //if not then we should delete the existing error property so the error is cleared up.
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    //we want to update the state but not directly, we want to clone it and let react update that state
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleCheckbox = e => {
    console.log(this.state.checked);
    this.setState({ checked: e.target.checked });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderRegisterButton(checked, label) {
    return (
      <button
        disabled={checked === false || this.validate()}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }

  renderCheckBox(text) {
    return (
      <label className="m-2">
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        />
        <span className="m-2">{text}</span>
      </label>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}
export default Form;
